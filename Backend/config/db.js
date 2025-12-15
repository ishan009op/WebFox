import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const connect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("done")
}).catch((error)=>{
    console.log(error)
})
}

export default connect