import express from "express";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();


const PORT = process.env.PORT || 8001;
const app = express();

app.get("/",(req, res)=> res.send("HELLO"))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
