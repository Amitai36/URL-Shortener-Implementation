import axios from "axios"

import { AnaliticsType, FormData, shortUrl, ShortUrl } from "./types";

export const addShorten = async (data: FormData) => {
    const response = await axios.post<FormData & shortUrl>('http://localhost:3000/api/url/shorten', data);
    return response.data
}

export const getShorten = async (shortUrl: shortUrl) => {
    /* const response = */ await axios.put<FormData>(`http://localhost:3000/api/url/${shortUrl}`,);
    // return response.data
}

export const getAllShorten = async () => {
    const response = await axios.get<ShortUrl[]>(`http://localhost:3000/api/url/getAll`).then(res => res.data)
    return response
}

export const getAnalitics = async (url: shortUrl) => {
    const response = await axios.get<AnaliticsType>(`http://localhost:3000/api/url/analitics/${url.shortUrl}`).then(res => res.data)
    return response
}
export const deleteShortUrl = async (id: string) => {
    await axios.delete(`http://localhost:3000/api/url`, { params: { id } });
} 