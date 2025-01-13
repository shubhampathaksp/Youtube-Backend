const express = require("express");
const app = express();
const port = 4000;
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',  //Your react app's Url
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());
require('./Connection/conn');
const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

// app.get('/',(req,res)=>{
//    res.send({
//     message:"Hi we have started our backend projects in Node js"   main ne 06:42 tk video dekhli
//    }) 
// })

app.use('/auth',AuthRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);

app.listen(port,()=>{
    console.log("our backend project is running on port 4000")
})