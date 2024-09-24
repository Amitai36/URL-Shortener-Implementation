import { Router } from "express";
import { getAllShortUrl, getShortUrl, shorten } from "../controllers/url";

const router = Router();

//post req
router.post("/shorten", shorten);

router.get("/getAll", getAllShortUrl);
//get req
router.get("/:shortUrl", getShortUrl);


export default router;
