const fs = require('fs')
const path = require('path')
const express = require('express');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');

const app = express();
const PORT  = process.env.PORT || 5000;

const connectDB = require('./models/db');

require('dotenv').config();
connectDB();


if(!fs.existsSync(path.join(__dirname,'pub_key.pem'))) {
    require('./genKeys').genKeys();
}

const servicesRoutes = require('./routes/services')
const usersRoutes = require('./routes/users');
const { checkAdmin } = require('./auth/admin');


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

require('./utils/passport')(passport)

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName:'sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))


app.use(passport.initialize());
app.use(passport.session());

checkAdmin()
app.use('/api/auth',usersRoutes);
app.use('/api/electronics-and-repairs',servicesRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
});
