const express = require ('express');
const cors = require ('cors');
const moongoose = require('mongoose');
require ('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.ATLAS_URI; //uri for mongodb

moongoose.connect (uri, {useNewUrlParser: true, useUnifiedTopology: true});

moongoose.connection.once('open', () => {
    console.log("MongoDB has connected succesfully");
})




app.listen(port, () => {
    console.log(`Server is runnig in port: ${port}`)
});