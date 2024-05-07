import express from "express";
import initApp from "./src/app.route.js";
import dotenv from "dotenv";
dotenv.config();
const app= express();
const PORT=process.env.PORT;
initApp(app,express);

app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`);
})