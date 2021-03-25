import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const VideoSchema = new Schema({
link: {
    type:String,
    trim: true, 
    default: ""
},
creator: {
    type:String,
    trim: true, 
    default: ""
},
date: {
    type: Date, 
    default: Date.now
},
});


const Video = mongoose.model('Video', VideoSchema); 
export default Video; 