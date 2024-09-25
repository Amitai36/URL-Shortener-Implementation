import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Analytics, DeleteForever } from "@mui/icons-material"
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

import { shortUrl } from "../api/types"
import Verification from "./Verification"
import DialogComponent from "../components/DialogComponent"
import { useGetAllShortUrl, useUpdateShortUrl } from "../api/query"


//Displays dry details about the URL by table and reading from the data base
function UrlList() {
    const { data, isLoading } = useGetAllShortUrl()
    const [dialog, setDialog] = useState({ open: false, id: '' })
    const navigate = useNavigate()
    const { mutate } = useUpdateShortUrl()

    if (isLoading) {
        return <Typography variant="h4">Loading...</Typography>
    }
    if (!data && !isLoading) {
        return <Typography variant="h4">NO DATA</Typography>
    }

    //When the user extracts it triggers a new req
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
                                {/* sending router state */}
                                <TableCell align="center"><IconButton onClick={() => navigate("/analitics", { state: { shortUrl: item.shortUrl } })}><Analytics /></IconButton></TableCell>
                                {/* Opening a model for secondary user authentication */}
                                <Button
                                    onClick={() => setDialog(prev => { return { id: item._id, open: !prev.open } })}><DeleteForever /></Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogComponent title={{ color: "yellow", text: "Certificate verification" }}
                open={dialog.open}
                whenClose={() => setDialog(() => { return { open: false, id: "" } })}
                content={<Verification open={dialog.open} id={dialog.id} setDialog={setDialog} />} />
        </div>
    )
}

export default UrlList
