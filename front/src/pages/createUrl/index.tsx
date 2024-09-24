import { Typography } from "@mui/material"

import UrlForm from "./UrlForm"

function CreateUrl() {
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h5">Create short Url</Typography>
            <UrlForm />
        </div>
    )
}

export default CreateUrl
