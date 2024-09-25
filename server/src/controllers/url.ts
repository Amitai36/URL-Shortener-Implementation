import _ from "lodash"
import { Request, Response } from "express"

import { UrlModel } from "../modules/url"
import { generateShortUrl } from "../utils/encoding";
import { deleteShortUrlQuery, GetShortUrlParams, ShortenBody } from "../types/url";

//add an url and reboots it
export const shorten = async (req: Request<{}, {}, ShortenBody>, res: Response) => {
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

//get all and select only shortUurl, longUrl and visit
export const getAllShortUrl = async (_req: Request, res: Response) => {
    try {
        const urls = await UrlModel.find().select("shortUrl longUrl visit")
        return res.json(urls).status(200)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update an url by short url. increase the visit by 1 and push to entering time the current time and do redirect
export const getShortUrl = async (req: Request<GetShortUrlParams>, res: Response) => {
    const { shortUrl } = req.params
    try {
        const urlData = await UrlModel.findOne({ shortUrl });
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

//get analitics by short url get in params
export const analitics = async (req: Request<GetShortUrlParams>, res: Response) => {
    const { shortUrl } = req.params
    try {
        const urlData = await UrlModel.findOne({ shortUrl });
        if (urlData?.DateEnter) {
            //counter by the day and send as number (unix)
            const datePerDay = _.countBy(urlData.DateEnter, (item) => new Date(new Date(item).toDateString()).getTime())
            res.json(datePerDay)
        }
    } catch (error) {
        return res.json({ message: error }).status(500)
    }
}

//delete an url by id and get id from the query
export const deleteShortUrl = async (req: Request<{}, {}, {}, deleteShortUrlQuery>, res: Response) => {
    try {
        const { id } = req.query
        await UrlModel.findByIdAndDelete(id)
        res.status(204).send()
    } catch (error) {
        return res.json({ message: error }).status(500)
    }
}