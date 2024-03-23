import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
// import connectDb from "./config/dbConnection"
dotenv.config();

async function connectDb(){
    try {
        const connect = await mongoose.connect(`${process.env.CONNECTION_URI}`)
        console.log("Database connected: ",
        connect.connection.host,
        connect.connection.name)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }   
}
connectDb()

const PORT = process.env.PORT || 8001;
const app = express();

app.get("/", (req, res) =>{ res.send("HELLO")});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
