import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";

import { shortUrl } from "./types";
import { addShorten, deleteShortUrl, getAllShorten, getAnalitics, updateShortUrl } from "./fetch";

//create useMutation with url's key for create an url
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

//create useMutation with url's key for update an url
export const useUpdateShortUrl = () => {
    return useMutation(["url"], updateShortUrl, {
    })
};

//create useQuery with url's key for get all urls
export const useGetAllShortUrl = () => {
    return useQuery(["url"], getAllShorten)
};

//create useMutation with url's key for delete an url
export const useDeleteShortUrl = () => {
    return useMutation(["url"], deleteShortUrl, {
        onSuccess: () => {
            toast.success("The link has been deleted")
        }
    })
};

//create useQuery with analitics's key for get analitics on an url
export const useGetAnalitics = (url: shortUrl) => {
    return useQuery(["analitics"], () => getAnalitics(url))
};