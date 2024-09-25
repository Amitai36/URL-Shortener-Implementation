import express from "express";

import url from "./routes/url"

const app = express();

//create endpoint entering for /url path
app.use("/url", url)

export default app;
