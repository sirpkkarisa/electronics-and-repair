const { Users } = require('../models/users');
const prompt = require('prompt');
const { hashPassword } = require('../utils/passwords');
prompt.start();

exports.checkAdmin = async () => {
    try {
        const isAdmin = await Users.findOne({isAdmin: true});

        if(!isAdmin) {

        prompt.get(['firstName', 'lastName','email','password'], async function (err, result) {
            if (err) { return onErr(err); }
               const {firstName, lastName, email, password,confirmPassword } = result;

               const isRegistered = await Users.findOne({email});
               if(isRegistered) {
                   
                   const newUser = await Users.updateOne({email}, {isAdmin: true})
                   console.log(newUser)
                   return;
               }

               const { hash, salt} = hashPassword(password);
               const user = await Users.create({firstName, lastName, email, isAdmin:true, hash, salt})
               console.log(user.firstName, 'Is the Admin')
            });
            
        function onErr(err) {
            console.log(err);
            return 1;
        }
    }
              
    }catch (error) {
        console.log(`${error}`)
    }
}




