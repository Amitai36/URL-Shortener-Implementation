import baseX from "base-x"

const BASE62_ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const base62 = baseX(BASE62_ALPHABET);

//generte sort url by base 62
export function generateShortUrl(longUrl: string) {
    const shortUrl = base62.encode(Buffer.from(longUrl))
    return shortUrl
}
