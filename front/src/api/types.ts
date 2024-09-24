export interface FormData {
    longUrl: string;
    shortUrl: string
    expiresIn?: number;
}

export interface ShortUrl {
    shortUrl: string
    _id: string
    longUrl: string
}