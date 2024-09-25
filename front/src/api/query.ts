import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";

import { addShorten, getAllShorten, getAnalitics, getShorten } from "./fetch";
import { shortUrl } from "./types";

export const useAddShortUrl = () => {
    return useMutation(["url"], addShorten, {
        onSuccess: (data) => {
            toast.success(data.shortUrl)
        },
        onError: (e: AxiosError<{ message: string }>) => {
            toast.error(e.response?.data?.message)
        }
    })
};

export const useGetShortUrl = () => {
    return useMutation(["url"], getShorten, {
    })
};

export const useGetAllShortUrl = () => {
    return useQuery(["url"], getAllShorten)
};

export const useGetAnalitics = (url: shortUrl) => {
    return useQuery(["analitics"], () => getAnalitics(url))
};