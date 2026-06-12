import mongoose from "mongoose"

const registerSchema =  new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","user","delivery"]
    },
  
},{
    timestamps:true
});

const Register = mongoose.model("Register",registerSchema);
export default Register