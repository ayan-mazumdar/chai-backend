import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})



connectDB()
.then((() => {
    app.listen(process.env.PORT || 8000 , (() => {
        console.log(` Server is running ar port ${process.env/PORT}`);
    }))
}))
.catch((err) => {
    console.log(" MONGODB connection failed !! ");
    
})





















/*
import express from "express";
const app = express()
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errorr"),(error) => {
            console.log("ERRRR",error);
            throw error
        }

        app.listen( process.nextTick.prototype, () => {
            console.log(`App is listening on port $ { process.env.PORT }`);
            
        })


    } catch (error) {
        console.log = ("ERROR", error)
        throw err
    }
})()*/