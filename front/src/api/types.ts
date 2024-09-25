export interface FormData {
    longUrl: string;
    expiresIn?: number;
}

export type shortUrl = { shortUrl: string }

export interface ShortUrl {
    shortUrl: string
    _id: string
    longUrl: string
}