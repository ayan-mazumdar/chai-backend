import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"})) // limits the json
app.use(express.urlencoded({extended:true, limit:"16kb"})) //limits the json from url
app.use(express.static("public")) 
app.use(cookieParser())


export { app }