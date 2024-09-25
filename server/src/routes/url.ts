import { Router } from "express";

import { analitics, getAllShortUrl, getShortUrl, shorten } from "../controllers/url";

const router = Router();

//post req to add a short url
router.post("/shorten", shorten);

//get req for get all urls 
router.get("/getAll", getAllShortUrl);

//get req a url
router.put("/:shortUrl", getShortUrl);

router.get("/analitics/:shortUrl", analitics);


export default router;
