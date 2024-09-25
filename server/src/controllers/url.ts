import _ from "lodash"
import moment from "moment"
import { Request, Response } from "express"

import { UrlModel } from "../modules/url"
import { generateShortUrl } from "../utils/encoding";

export const shorten = async (req: Request<{}, {}, { longUrl: string, expiresIn: number }>, res: Response) => {
    const { longUrl, expiresIn } = req.body;
    try {
        const existingUrl = await UrlModel.findOne({ longUrl });

        if (existingUrl) {
            return res.status(403).json({ message: "The link already exists" }).end();
        }
        const shortUrl = generateShortUrl(longUrl);
        const newUrl = new UrlModel({
            longUrl,
            shortUrl,
            expiresAt: expiresIn ? Date.now() + expiresIn * 1000 : null,
            visit: 0
        });
        await newUrl.save();
        return res.json({ shortUrl });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllShortUrl = async (_req: Request, res: Response) => {
    try {
        const urls = await UrlModel.find().select("shortUrl longUrl visit")
        return res.json(urls)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getShortUrl = async (req: Request<{ shortUrl: string }>, res: Response) => {
    try {
        const urlData = await UrlModel.findOne({ shortUrl: req.params.shortUrl });
        if (!urlData) {
            return res.status(404).json({ message: 'URL not found' });
        }
        await UrlModel.updateOne({ shortUrl: req.params.shortUrl },
            {
                $inc: { visit: 1 },
                $push: { DateEnter: new Date().getTime() }
            })
        return res.redirect(urlData.longUrl);
    } catch (error) {
        return res.json({ message: error }).status(500)
    }
}

export const analitics = async (req: Request<{ shortUrl: string }>, res: Response) => {
    try {
        const urlData = await UrlModel.findOne({ shortUrl: req.params.shortUrl });
        if (urlData?.DateEnter) {
            const datePerDay = _.countBy(urlData.DateEnter, (item) => new Date(new Date(item).toDateString()).getTime())
            res.json(datePerDay)
        }
    } catch (error) {
        return res.json({ message: error }).status(500)
    }
}

export const deleteShortUrl = async (req: Request<{}, {}, {}, { id: string }>, res: Response) => {
    try {
        const { id } = req.query
        await UrlModel.findByIdAndDelete(id)
        res.status(204).send()
    } catch (error) {
        return res.json({ message: error }).status(500)
    }
}