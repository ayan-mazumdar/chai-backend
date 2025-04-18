import mongoose from "mongoose"
import { DM_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`$process.env.MONGODB_URI/${DB_NAME}`)
        console.log(`|n MONGODB connected !! DB HOST:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MOGODB connection error" , error);
        process.exit(1)
        
    }
}

export default connectDB