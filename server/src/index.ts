import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import api from "./api";
import { port } from "./config/index"
import { connectDB } from "./db/mongoose";

//for get var from env
dotenv.config();
//connect to mongoDB
connectDB();
//express server
const app = express()

//allow json here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//get all can get and post here
app.use(cors());
//where / go to api routing
app.use("/api", api)
//listen to 3000 port
app.listen(port, () => {
    console.log("listen to port 3000")
})