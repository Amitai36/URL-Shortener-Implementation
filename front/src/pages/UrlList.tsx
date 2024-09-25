import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

import { shortUrl } from "../api/types"
import { useGetAllShortUrl, useGetShortUrl } from "../api/query"
import { Analytics } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

function UrlList() {
    const { data, isLoading } = useGetAllShortUrl()

    const navigate = useNavigate()
    const { mutate } = useGetShortUrl()

    if (isLoading) {
        return <Typography variant="h4">Loading...</Typography>
    }
    if (!data && !isLoading) {
        return <Typography variant="h4">NO DATA</Typography>
    }

    const handleClick = (shortUrl: shortUrl) => {
        mutate(shortUrl)
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
                            <TableCell align="center">Analitics</TableCell>
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
                                <TableCell align="center"><IconButton onClick={() => navigate("/analitics", { state: { shortUrl: item.shortUrl } })}><Analytics /></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default UrlList
