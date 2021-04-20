import Thread from '../models/ThreadModel.js'
import express from 'express'
const router = express.Router(); 

export const threadRouter = router.get('/thread',  (req, res) => {
 
    try {
        Thread.find({}, (err, result)=> {
            if(err){
                console.log(err);
            }
            else{
                res.json(result); 
            }
        })
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}); 
