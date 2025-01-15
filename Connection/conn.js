const mongoose = require("mongoose");
require('dotenv').config();
// youtubeBackend

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log('DB connnection succesfull !')).catch(err=>{
    console.log(err)
});

