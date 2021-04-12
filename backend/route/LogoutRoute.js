import express from 'express'
const router = express.Router(); 
import {auth} from '../middleware/authentication.js'

//logout route sets cookie to null and the cookie is set as expired
export const logoutRouter = router.get('/logout', auth, (req,res) => {
    try {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
 
    console.log("Logout: " + req.user);
    
}
catch(error) {
    res.status(409).json({Message: error.message});
}
});