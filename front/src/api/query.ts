import { useMutation, useQuery } from "react-query";

import { addShorten, getShorten } from "./fetch";

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
