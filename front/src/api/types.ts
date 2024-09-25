export interface FormData {
    longUrl: string;
    expiresIn?: number;
}

export type shortUrl = { shortUrl: string }

export interface ShortUrl extends shortUrl {
    _id: string
    longUrl: string,
    visit: number
}