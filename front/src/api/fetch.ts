import axios from "axios"

import { FormData, shortUrl, ShortUrl } from "./types";

export const addShorten = async (data: FormData) => {
    const response = await axios.post<FormData & shortUrl>('http://localhost:3000/api/url/shorten', data);
    return response.data
}

export const getShorten = async (data: FormData) => {
    const response = await axios.get<FormData>(`http://localhost:3000/api/url/shorten/${1}`,);
    return response.data
}

export const getAllShorten = async () => {
    const response = await axios.get<ShortUrl[]>(`http://localhost:3000/api/url/getAll`).then(res => res.data)
    return response
} 