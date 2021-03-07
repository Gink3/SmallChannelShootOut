import express from 'express'; 
import cors from 'cors';
import mongoose from 'mongoose'; 
import {signUpRouter} from './route/SignupRoute.js'
const ATLAS_URI= "mongodb+srv://admin:SmallChannelSh00tOut!@cluster0.q9opq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const app = express();
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 

const uri = ATLAS_URI; //uri for mongodb

mongoose.connect (uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log("MongoDB has connected succesfully");
})

app.post('/signup', signUpRouter); 

app.listen(port, () => {
    console.log(`Server is runnig in port: ${port}`)
});

