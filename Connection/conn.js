const mongoose = require("mongoose");

// youtubeBackend

mongoose
.connect('mongodb://localhost:27017/youtubeBackend')
.then(()=> console.log('DB connnection succesfull !')).catch(err=>{
    console.log(err)
});

