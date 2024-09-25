import { useMutation, useQuery } from "react-query";

import { addShorten, getAllShorten, getShorten } from "./fetch";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const useAddShortUrl = () => {
    return useMutation(["url"], addShorten, {
        onSuccess: (_data, v) => {
            console.log(_data, v)
            toast.success(v.shortUrl)
        },
        onError: (e: AxiosError<{ message: string }>) => {
            toast.error(e.response?.data?.message)
        }
    })
};

export const useGetShortUrl = () => {
    return useQuery(["url", getShorten])
};

export const useGetAllShortUrl = () => {
    return useQuery(["url"], getAllShorten)
};
