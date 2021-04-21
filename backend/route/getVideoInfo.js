import express from 'express'
import Video from '../models/VideoModel.js' //importing models from user models from mongodb
import {auth} from '../middleware/authentication.js'

const router = express.Router(); 
export const videoInfoRouter = router.get('/videoInfo',  async (req, res) => {

    try {
        Video.find({}, (err, result)=> {
            if(err){
                console.log(err);
            }
            else {
                
                return res.json(result);
            }
        }).sort({votes:-1});  
     }
     catch(error) {
         res.status(409).json({Message: error.message});
     }
 }); 