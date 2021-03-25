//This will help authenticate user to do certain tasks
import jwt from 'jsonwebtoken';
export const auth = (req, res, next) => { 
    try {
        const token = req.cookies.token; 
        if(!token){
            return res.json({Message: "Permission Denied!"});
        }

        const verify = jwt.verify(token, process.env.JWT_PASS); 
        console.log(verify.user); 
        req.user = verify.user;
        next(); 

    }
    catch(err){
        console.error(err);
        res.json({Message: "Permission Denied!"});
    }
}