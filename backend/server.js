import express from 'express'; 
import cors from 'cors';
import mongoose from 'mongoose'; 
import {signUpRouter} from './route/SignupRoute.js'; //importing route for signup
import {loginRouter} from './route/LoginRoute.js'; //importing route forr login
import {logoutRouter} from './route/LogoutRoute.js'; //importing route for logout

import {talkRouter} from './route/TalkRoute.js'; 
import {threadRouter} from './route/GettalkRoute.js'; 

import {isLoggedInRouter} from './route/isLoggedInroute.js' //importing route for isLoggedIn
import {userInfoRouter} from './route/getUserInfo.js'
import {voteRouter} from './route/voteRoute.js'
import dotenv from 'dotenv'; 
import cookieParser from 'cookie-parser';
dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
})); 
app.use(express.json()); 
app.use(cookieParser());

const uri = process.env.ATLAS_URI; //uri for mongodb

mongoose.connect (uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log("MongoDB has connected succesfully");
})

app.post('/talk', talkRouter);
app.post('/signup', signUpRouter); //route for signup
app.post('/login', loginRouter);  //route for login
app.get('/logout', logoutRouter); //route for logout
app.get('/thread', threadRouter); //route for getting thread posts
app.get ('/isLoggedIn',isLoggedInRouter); //check if user are logged in 
app.get('/userInfo', userInfoRouter); //check if user are not logged in
app.post ('/vote', voteRouter); //voting router
app.listen(port, () => {
    console.log(`Server is runnig in port: ${port}`)
});

