import express from 'express'
const router = express.Router(); 
import {auth} from '../middleware/authentication.js'
import Video from '../models/VideoModel.js'


export const videoRouter = router.post('/video', auth, async (req,res) => {
    try {
        var {votedVideo} = req.body;
        var videoId = votedVideo; 
        if(videoId == ""){
            res.send("No video ID"); 
        } 
        else{
        const oldVideo = await Video.findOne({videoId:videoId}).then(()=>{
            console.log("Find error");
        });
       
        if(oldVideo){
           var numVote = oldVideo.votes+1; 
          await Video.updateOne({videoId:videoId}, {$set:{votes:numVote}}).then(()=>{
              console.log("updateOne error");
          }); 
          console.log(numVote); 
          res.json("vote increased");
        }
        else {
            const newVideo = new Video({videoId, votes: 1}); 
            newVideo.save(); 
            res.json("votes saved");    
        }
    }
}
catch(error) {
    res.status(409).json({Message: error.message});
}
});