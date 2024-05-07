//collecton contains sechema and mode in singel name
 import { Schema,model } from "mongoose"; 

 const userSchema= new Schema({
    //attributes
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    password:{     
         type:String,
        required:true,
    },
    age:{
        type:Number
    },
    gender:{
        type:String,
        default:'Male',
        enum: ['Female','Male']
    }
 },{
    timestamps:true,//time
 });

 const userModel = model('User',userSchema);
 export default userModel;