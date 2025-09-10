require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const app = express()
const db = process.env.DB_URI
mongoose.connect(db).then(()=>{
    console.log("Database has been established successfully");    
    app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
})
}).catch((error)=>{
    console.log("Error connecting to database", error.message);
    
})
