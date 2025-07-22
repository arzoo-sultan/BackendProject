import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import 'dotenv/config'
import connectDB from "./DB/index.js";

connectDB();
/*const app= express();

;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("error :",error)
        throw error

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
       })
    } catch (error) {
        console.error("ERROR")
        throw err
        
    }

})()*/