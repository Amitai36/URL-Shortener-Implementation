import { Router } from "express";

import { analitics, deleteShortUrl, getAllShortUrl, getShortUrl, shorten } from "../controllers/url";

const router = Router();

//endpoint for delete an url
router.delete("/", deleteShortUrl);

//post req to add a short url
router.post("/shorten", shorten);

//get req for get all urls 
router.get("/getAll", getAllShortUrl);

//get req for update an url
router.put("/:shortUrl", getShortUrl);

//get req for get analitics on an url
router.get("/analitics/:shortUrl", analitics);



export default router;
