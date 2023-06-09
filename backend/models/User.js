import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, // cant make new users without name its essential
        unique:true // all users are unique

    },
    email:{
        type:String,
        required:true, 
        unique:true 

    },
    password:{
        type:String,
        required:true, 
    },
    img:{
        type:String,
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type: [String] // used to store the userid of subcribers
    }


},{timestamps:true});

export default mongoose.model("User", UserSchema)