import axios from "axios"

import { AnaliticsType, FormData, shortUrl, ShortUrl } from "./types";

//create base url that repeated
axios.defaults.baseURL = `http://localhost:${process.env["PORT"]}/api`

//create fetch for add short url
export const addShorten = async (data: FormData) => {
    const response = await axios.post<FormData & shortUrl>('/url/shorten', data);
    return response.data
}
//create fecth for update short url
export const updateShortUrl = async (shortUrl: shortUrl) => {
    await axios.put<FormData>(`/url/${shortUrl}`,);
}
//create fecth for get list of all urls
export const getAllShorten = async () => {
    const response = await axios.get<ShortUrl[]>(`/url/getAll`).then(res => res.data)
    return response
}
//get data for analitics about short url
export const getAnalitics = async (url: shortUrl) => {
    const response = await axios.get<AnaliticsType>(`/url/analitics/${url.shortUrl}`).then(res => res.data)
    return response
}
//fetch for delete an url
export const deleteShortUrl = async (id: string) => {
    await axios.delete(`/url`, { params: { id } });
} 