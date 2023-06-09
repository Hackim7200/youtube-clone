import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

import userRoutes from "./routes/user.js"; // you only import the routes containing the controllers

const app = express();
dotenv.config() // to need to do this before start using .env file

const connect = ()=>{
    mongoose.connect(process.env.MONGO)
    .then(()=>console.log("connect to db") )
    .catch((err)=>{throw err})
}

app.use("/api/user",userRoutes); //the string infront is part of the url before there rest of it



app.listen(8800,()=>{
    connect()
    console.log("-----------server started-----------")
})