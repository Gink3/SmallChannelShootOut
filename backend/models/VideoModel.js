import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const VideoSchema = new Schema({
videoID: {
    type:Number, 
    trim: true, 
    default: ""
},
videoLink: {
    type:String,
    trim: true, 
    default: ""
},
creator: {
    type:String,
    trim: true, 
    default: ""
},
});


const Video = mongoose.model('Video', VideoSchema); 
export default Video; 