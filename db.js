const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/student-api');
const db=mongoose.connection;

db.on('connected',function(){
    console.log("Database connected...");
});

db.on('disconnected',function(){
    console.log("Database disconnected...");
});

db.on('error',function(){
    console.log("Something went wrong...");
});

module.exports=db;