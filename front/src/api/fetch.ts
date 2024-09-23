import axios from "axios"

import { FormData } from "./types";

export const addShorten = async (data: FormData) => {
    const response = await axios.post<FormData>('http://localhost:3000/api/url/shorten', data);
    return response.data
}

export const getShorten = async (data: FormData) => {
    const response = await axios.get<FormData>(`http://localhost:3000/api/url/shorten/${1}`,);
    return response.data
} 