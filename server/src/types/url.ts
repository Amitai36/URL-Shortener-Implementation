export interface ShortenBody {
    longUrl: string, expiresIn: number
}

export interface GetShortUrlParams {
    shortUrl: string
}

export interface deleteShortUrlQuery {
    id: string
}