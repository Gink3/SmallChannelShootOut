import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
firstName: {
    type:String, 
    trim: true, 
    default: ""
},
lastName: {
    type:String,
    trim: true, 
    default: ""
},
userName: {
    type:String,
    trim: true, 
    default: ""
},
email:{
    type:String,
    trim:true, 
    default:""
},
password: {
    type:String, 
    default:"" 
    },

});


const User = mongoose.model('User', UserSchema); 
export default User; 