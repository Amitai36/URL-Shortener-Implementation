import { Request, Response } from "express"

import { UrlModel } from "../modules/url"
import { generateShortUrl } from "../utils/encoding";

export const shorten = async (req: Request<{}, {}, { longUrl: string, expiresIn: number }>, res: Response) => {
    const { longUrl, expiresIn, } = req.body;
    const existingUrl = await UrlModel.findOne({ longUrl });
    if (existingUrl) {
        return res.json({ shortUrl: existingUrl.shortUrl });
    }
    const shortUrl = generateShortUrl(longUrl)
    console.log(shortUrl)
    const newUrl = new UrlModel({
        longUrl,
        shortUrl,
        expiresAt: expiresIn ? Date.now() + expiresIn * 1000 : null,
        visited: 0
    });
    await newUrl.save();
    res.json({ shortUrl });
};

export const getShortUrl = async (req: Request, res: Response) => {
    const urlData = await UrlModel.findOne({ shortUrl: req.params.shortUrl });

    if (!urlData) {
        return res.status(404).json({ error: 'URL not found' });
    }
    if (urlData.expiresAt /* && Date.now() > urlData.expiresAt */) {
        await UrlModel.deleteOne({ shortUrl: req.params.shortUrl });
        return res.status(410).json({ error: 'URL expired' });
    }

    res.redirect(urlData.longUrl);
}

export const getAllShortUrl = async (_req: Request, res: Response) => {
    try {
        const urls = await UrlModel.find().select("shortUrl longUrl")
        res.json(urls)
    } catch (error) {
        res.status(500).json(error)
    }
}
