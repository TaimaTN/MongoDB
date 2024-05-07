import userModel from "../../../DB/models/User.model.js";
const getUsers=async(req,res)=>{
    try{
         
       const users= await userModel.find();
        return res.json({Message:"sucess",users});
    }catch(Err){
        return res.json(Err.stack);
    }
}

const userById= async(req,res)=>{
    try{
        const {_id}= req.query;
        
       const user= await userModel.findById(_id);
       return res.json({Message:"sucess user SeArch",user});
    }catch(Err){
        return res.json({Message:`invalid input, try another id \n` +Err.message});
    }
}

const deleteUser= async(req,res)=>{
    try{
        const id=req.userId;// form middelware (authentication)
        const duser= await userModel.deleteOne({_id:id});
        if(!duser.deletedCount) return res.json({message:"this user has been deleted befor",duser});
        return res.json({message:"sucess to delete user",duser});

    }catch(Err){
        return res.json({Message:`invalid input, try another data \n` +Err.message});
    }
}

const updateUser= async (req,res)=>{
    try{
        const id=req.userId;
        const {email}= req.body;
        const uuser= await userModel.findOneAndUpdate({_id:id},{email},{new:true});
        if(!uuser) return res.json({ERROR:"user not found, try another availabel",uuser});
        return res.json({Message:"sucess updating user",uuser});
    }catch(Err){
        return res.json({Message:`invalid input, try another data \n` ,Error:Err.stack});
    }
}

export {getUsers, userById, deleteUser, updateUser};