import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true, // cant make new users without name its essential
        unique:true // all users are unique
    },
    title:{
        type:String,
        required:true, 
    },
    desc:{
        type:String,
        required:true, 
    },
    img:{
        type:String,
        required:true, 
    },
    videoUrl:{
        type:String,   //will use google storage to host videos
        required:true,
    },
    views:{
        type:Number,  
        default: 0
    },
    tags:{
        type:[String],
        default:[]
    },
    likes:{
        type:[String],
        default:[]
    },
    dislikes:{
        type:[String],
        default:[]
    }
    


},{timestamps:true});

export default mongoose.model("User", VideoSchema)