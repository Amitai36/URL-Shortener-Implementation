import base62 from "base62"
import { Request, Response } from "express"

import { UrlModel } from "../modules/url"

export const shorten = async (req: Request<{}, {}, { longUrl: string, expiresIn: number }>, res: Response) => {
    const { longUrl, expiresIn, } = req.body;
    const existingUrl = await UrlModel.findOne({ longUrl });
    if (existingUrl) {
        return res.json({ shortUrl: existingUrl.shortUrl });
    }
    const urlCount = await UrlModel.countDocuments();
    const shortUrl = base62.encode(urlCount);
    const newUrl = new UrlModel({
        longUrl,
        shortUrl,
        expiresAt: expiresIn ? Date.now() + expiresIn * 1000 : null,
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
