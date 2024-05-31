const mongoose = require('mongoose');

const connectDb = mongoose.connect('mongodb://localhost:27017/ramesh').then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log("mongoose error",err)
});



module.exports = connectDb;