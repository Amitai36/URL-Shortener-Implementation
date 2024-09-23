import express from "express";

import url from "./routes/url"

const app = express();

app.use("/url", url)

export default app;
