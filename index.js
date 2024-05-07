import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import initApp from "./src/app.route.js";
dotenv.config();
const app= express();
PORT= process.env.PORT|| 3000;
app.use(cors());// publish api request on front end code project
initApp(app,express);

app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`);
})