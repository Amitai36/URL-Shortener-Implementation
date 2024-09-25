import { Paper, Typography } from "@mui/material"

import Form from "../../components/Form"

function CreateUrl() {
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h5">Create short Url</Typography>
            <Paper sx={{ margin: 10 }}>
                <Form />
            </Paper>
        </div>
    )
}

export default CreateUrl
