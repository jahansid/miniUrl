import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import shortUrl from "./routes/shortUrl.js"
dotenv.config();

async function connectDb() {
  try {
    const connect = await mongoose.connect(`${process.env.CONNECTION_URI}`);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
connectDb();

const PORT = process.env.PORT || 8001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// const shortUrl = await import("./routes/shortUrl.js")

app.use("/api", shortUrl);
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
