import express from 'express'
const router = express.Router(); 
import jwt from 'jsonwebtoken';

export const isLoggedInRouter = router.get('/isLoggedIn', (req,res) => {
    try {
        const token = req.cookies.token; 
        if(!token){
            return res.json(false);
        }
    
    jwt.verify(token, process.env.JWT_PASS); 
     return res.json(true);    
    
    }
    catch(err){
        console.error(err);
        var state = false;
        return res.json(false);
    }

});

