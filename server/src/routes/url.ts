import { Router } from "express";
import { getShortUrl, shorten } from "../controllers/url";

const router = Router();

//post req
router.post("/shorten", shorten);

//get req
router.get("/:shortUrl", getShortUrl);

export default router;
