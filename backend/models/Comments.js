import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true, // cant make new users without name its essential
        unique:true // all users are unique
    }, 
    videoId:{
        type:String,
        required:true, // cant make new users without name its essential
        unique:true // all users are unique
    }, 
    desc:{
        type:String,
        required:true, // cant make new users without name its essential
        unique:true // all users are unique
    },

    


},{timestamps:true});

export default mongoose.model("User", VideoSchema)