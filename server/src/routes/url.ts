import { Router } from "express";
import { getAllShortUrl, getShortUrl, shorten } from "../controllers/url";

const router = Router();

//post req
router.post("/shorten", shorten);

//get req
router.get("/:shortUrl", getShortUrl);

router.get("/", getAllShortUrl);

export default router;
