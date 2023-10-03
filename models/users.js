import mongoose, { Schema, models } from "mongoose";

const UserSchema= new  Schema({
    email:{
        type:String,
        required: true,
    },

    name:{
        type:String,
        required: true,
    },

    password:{
        type:String,
        required: false,
    },

},{timestamps:true})

const User= models.User|| mongoose.model('User',UserSchema);
export default User;