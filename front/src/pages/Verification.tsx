import { Button, Typography } from "@mui/material"
import { useDeleteShortUrl } from "../api/query";

type dialog = {
    open: boolean;
    id: string;
}

interface VerificationProps extends dialog {
    setDialog: React.Dispatch<React.SetStateAction<dialog>>,
}

function Verification(props: VerificationProps) {
    const { setDialog, id } = props
    const { mutate } = useDeleteShortUrl()

    return (
        <div>
            <Typography >Are you sure you want to delete the link?</Typography>
            <div style={{ marginTop: "10%" }}>
                <Button onClick={() => setDialog(prev => { return { open: !prev.open, id: "" } })} variant="contained" color={"error"}>no</Button>
                <Button
                    onClick={() => {
                        mutate(id)
                    }}
                    variant="contained" sx={{ left: "80%" }}
                    color={"primary"}>yes</Button>
            </div>
        </div>
    )
}

export default Verification
