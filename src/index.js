//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)    
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed", err);
})
// import express from "express"

// const app=express()
// // Immediately Invoked Async Function Expression (IIFE)
// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("✅ MongoDB connected successfully");
//     app.on("error",(error)=>{
//         console.log("ERROR: ",error);
//         throw error
//     })
//     app.listen(process.env.PORT(),()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);
//     process.exit(1); // optional: exit the app
//   }
// })();
