import mongoose from 'mongoose';

const connectDB =async()=>{
  
      return  mongoose.connect(`mongodb+srv://taima123:taima1234@cluster0.ce0csjy.mongodb.net/mongo`)
      .then(()=>{
        console.log("sucess to connect DB");
      }).catch(er=>{
        console.log("err conectDB",er);
      });    
}
export default connectDB;