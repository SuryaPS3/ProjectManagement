import express from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
const app = express();

//Midlleware/ parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())
//route
app.get("/",(req,res)=>res.send("First Route: Server is running"));

const PORT = process.env.PORT || 5000;//start the server on port from dotenv or 5000

//listen will start the application
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));