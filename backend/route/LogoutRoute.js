import express from 'express'
const router = express.Router(); 

export const logoutRouter = router.get('/logout', (req,res) => {
    try {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send(); 
}
catch(error) {
    res.status(409).json({Message: error.message});
}
});