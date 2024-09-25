import { List, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

import { useGetAllShortUrl, useGetShortUrl } from "../api/query"
import { shortUrl } from "../api/types"
import React from "react"

function UrlList() {
    const { data, isLoading } = useGetAllShortUrl()
    const { mutate } = useGetShortUrl()

    if (!data || isLoading) {
        return <Typography variant="h1">loading...</Typography>
    }

    const handleClick = (shortUrl: shortUrl) => {
        mutate(shortUrl, {
            onSuccess: (a, b) => {
                console.log(a, b)
            }
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h5">short url list</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ textAlign: "center" }}>
                            <TableCell align="center">Short URL</TableCell>
                            <TableCell align="center">Long URL</TableCell>
                            <TableCell align="center">Visited</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow
                                key={item._id}
                                sx={{ cursor: "pointer" }}
                                onClick={() => handleClick({ shortUrl: item.shortUrl })}
                            >
                                <TableCell align="center">{item.shortUrl}</TableCell>
                                <TableCell align="center">{item.longUrl}</TableCell>
                                <TableCell align="center">{item.visit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default UrlList
