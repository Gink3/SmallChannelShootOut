import express from 'express'
const router = express.Router(); 
import {auth} from '../middleware/authentication.js'
import User from '../models/UserModel.js' 


export const voteRouter = router.post('/vote', auth, async (req,res) => {
    try {
        var {votedVideo} = req.body;
        if(votedVideo == ""){
            res.json("Cannot vote. try again")
        } 
        const oldUser = await User.findOne({_id: req.user});
        oldUser.votedVideo.push(votedVideo); 
        oldUser.save(); 
        res.json("Successfully voted"); 
        
}
catch(error) {
    res.status(409).json({Message: error.message});
}
});