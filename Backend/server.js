import express from 'express'
import dotenv from 'dotenv'
import connect from './config/db.js'
import ContactRoutes from './routes/Contact.Route.js'
import UserRoutes from './routes/User.Route.js'
import cors from 'cors'
const app=express()
dotenv.config()


app.use(
    cors({
    origin: "https://web-fox-seven.vercel.app", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
    credentials: true,
})
);

connect()

app.use(express.json())


app.use('/api/contact',ContactRoutes)
app.use('/api/user',UserRoutes)

app.listen(process.env.PORT||3000,()=>{
    console.log('hello')
})