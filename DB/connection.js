import mongoose from 'mongoose';

const connectDB =async()=>{
  
      return  mongoose.connect(`${process.env.DB}`)
      .then(()=>{
        console.log("sucess to connect DB");
      }).catch(er=>{
        console.log("err conectDB",er);
      });    
}
export default connectDB;