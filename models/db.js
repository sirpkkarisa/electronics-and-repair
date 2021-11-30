const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected!');
    }catch(err) {
        console.log(err)
    }
}

module.exports = connectDB;