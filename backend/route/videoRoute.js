import express from 'express'
const router = express.Router(); 
import {auth} from '../middleware/authentication.js'
import Video from '../models/VideoModel.js'


export const videoRouter = router.post('/video', auth,  async (req,res) => {
    try {
        var {videoId, videoTitle, channelTitle} = req.body;
       // var videoId = votedVideo; 
        if(videoId == ""){
            return res.send("No video ID"); 
        }
        
        
        else{
        
        const oldVideo = await Video.findOne({videoId:videoId})
    
        if(oldVideo){
           var numVote = oldVideo.votes+1; 
           await Video.updateOne({videoId:videoId}, {$set:{votes:numVote}}).then(()=>{
               console.log("updated");
           })
          console.log(numVote); 
          return res.json("vote increased");
        }
        else {
            const newVideo = new Video({videoId,videoTitle, channelTitle, votes: 1}); 
            newVideo.save(); 
            return res.json("votes saved");    
        }
    }
}
catch(error) {
    res.status(409).json({Message: error.message});
}
});