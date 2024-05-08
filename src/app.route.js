import connectDB from "../DB/connection.js";
import authRouter from "./moduels/auth/router.js";
import userRouter from "./moduels/user/router.js";
const initApp=(app,express)=>{
    connectDB();
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.json({wELLCOME:"HOME PAGE"});
    });
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/*',(req,res)=>{
       return res.json({message:"page not found"});
    })
}

export default initApp;