import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const VideoSchema = new Schema({
videoId: {
    type:String, 
    default: ""
},
videoTitle:{
    type:String, 
    default:""
},
channelTitle:{
    type:String, 
    default:""
},
votes: {
    type: Number, 
    default: 0
},
});


const Video = mongoose.model('Video', VideoSchema); 
export default Video; 