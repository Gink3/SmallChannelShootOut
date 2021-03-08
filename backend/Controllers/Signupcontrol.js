import User from '../models/UserModel.js'
import bcrypt from 'bcrypt';
export const signUp = async (req, res) => {
    //res.send('THIS WORKS');   
   var {firstName, lastName, userName, email, password} = req.body; 
    password = bcrypt.hashSync(password, 12);
    try {
        const newUser = new User({firstName, lastName, userName, email, password}); 
        newUser.save(); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}; 