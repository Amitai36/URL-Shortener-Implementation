import { Button, Typography } from "@mui/material"

type dialog = {
    open: boolean;
    id: string;
}

interface VerificationProps extends dialog {
    setDialog: React.Dispatch<React.SetStateAction<dialog>>,
}

function Verification(props: VerificationProps) {
    const { setDialog , id} = props

    return (
        <div>
            <Typography >Are you sure you want to delete the link?</Typography>
            <div style={{ marginTop: "10%" }}>
                <Button onClick={() => setDialog(prev => { return { open: !prev, id: "" } })} variant="contained" color={"error"}>no</Button>
                <Button variant="contained" sx={{ left: "80%" }} color={"primary"}>yes</Button>
            </div>
        </div>
    )
}

export default Verification
