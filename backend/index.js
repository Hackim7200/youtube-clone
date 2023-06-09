import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
dotenv.config() // to need to do this before start using .env file

const connect = ()=>{
    mongoose.connect(process.env.MONGO)
    .then(()=>console.log("connect to db") )
    .catch((err)=>{throw err})
}




app.listen(8800,()=>{
    connect()
    console.log("-----------server started-----------")
})