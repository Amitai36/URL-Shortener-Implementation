import { useMutation, useQuery } from "react-query";

import { addShorten, getAllShorten, getShorten } from "./fetch";

export const useAddShortUrl = () => {
    return useMutation(["url"], addShorten, {
        onSuccess: (_data, v) => {
            alert(v.shortUrl)
        }
    })
};

export const useGetShortUrl = () => {
    useQuery(["url", getShorten])
};

export const useGetAllShortUrl = () => {
    useQuery(["url", getAllShorten])
};
