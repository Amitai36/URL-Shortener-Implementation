import mongoose from "mongoose";

import { mongoDBConnection } from "../config";

const uri = mongoDBConnection;

//connect by uri to mongodb
export function connectDB() {
  mongoose
    .connect(uri, {
      autoIndex: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error", error));
}
