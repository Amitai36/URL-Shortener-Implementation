import { List, ListItem, Typography } from "@mui/material"

import { useGetAllShortUrl } from "../api/query"

function UrlList() {
    const { data, isLoading } = useGetAllShortUrl()

    if (!data || isLoading) {
        return <Typography variant="h1">loading...</Typography>
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h5">short url list</Typography>
            <List>
                {data.map((item) =>
                    <ListItem key={item._id}>
                        <a href={item.longUrl} target="_blank">
                            {item.shortUrl}
                        </a>
                    </ListItem>
                )}
            </List>
        </div>
    )
}

export default UrlList
