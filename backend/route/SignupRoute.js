import express from 'express'
import bcrypt from 'bcrypt';
import User from '../models/UserModel.js' //importing models from user models from mongodb
import jwt from 'jsonwebtoken';
const router = express.Router(); 


///signup 
export const signUpRouter = router.post('/signup',  async (req, res) => {
    // This block does is made to test the database connection
    // The try block was not being run so we are disregarding anything after this block
    // while testing occurs to find the issue
    var hashedPass = bcrypt.hashSync(req.body.password,5);
    // Format found from https://www.peachpit.com/articles/article.aspx?p=2252193&seqNum=4
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPass
    });

    // Checks to see if a entry in the user collection
    // already has the username
    const doesUserNameExist = await User.exists({
        userName: req.body.userName
    });
    // Checks to see if a entry in the user collection
    // already has the Email
    const doesEmailExist = await User.exists({
        email: req.body.email
    });

    // If the email and usernames do not exist
    // We will then sign up the new user
    if (!doesUserNameExist || !doesEmailExist) {
        const saveUser = await newUser.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
        });
    } else {
        // Username or email already signed up
        // TODO create something to 
        console.log("Email/UserName already registered")
    }

    // for some reason this section is needed to route back
    // to the home page after submitting the forms
   var {firstName, lastName, userName, email, password, verifyPaswrd} = req.body; //storing the data got from frontend

   //password must be more than 8 letter long
   if (password.length < 8){
       return res.json({Message:"Password must contain 8 letters."})
   }

   //password and verify password must be same
   if (password != verifyPaswrd){
       return res.json({Message:"Confirm your password again."})
   } 

   function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

if(!validateEmail(email)){
    return res.json({Message:"Invalid email address."})
}
 try {
        console.log("Try Block Initiated");
        //encrypting the password
        password = bcVideorypt.hashSync(password, 12);
        const newUser = new User({firstName, lastName, userName, email, password}); //setting up new user
        const oldUser = await User.findOne({email: email}); //see if the email address exists in database
        //error message
        if (oldUser){
            return res.json({Message:"An account associated with the email already exists. Try Login instead."})
        }
        else{
            //save user, store the saved user ID in token and pass it as cookie
            const saveUser = await newUser.save(function(err,result){
                if (err){
                    console.log(err);
                }
                else{
                    console.log(result)
                }
            }); 
            const token =  jwt.sign({
                user: saveUser._id         
            }, process.env.JWT_PASS); 

            //Send the cookie to front end as token
            res.cookie("token", token, {
                httpOnly: true,
            }); 
            const store = saveUser._id;
            res.json({store}); 
        }
    }
    catch(error) {
        res.status(409).json({Message: error.message});
    }
}); 


