import { Button, Typography } from "@mui/material"
import { useDeleteShortUrl } from "../api/query";

type dialog = {
    open: boolean;
    id: string;
}

interface VerificationProps extends dialog {
    setDialog: React.Dispatch<React.SetStateAction<dialog>>,
}
//If the user decides that he approves, the document will be deleted,
//but if he cancels, then nothing will happen and the model will be closed
function Verification(props: VerificationProps) {
    const { setDialog, id } = props
    const { mutate } = useDeleteShortUrl()

    const handleClick = () => {
        //call to req for delete
        mutate(id)
        //for reset dialog state
        resetDialog()
    }
    const resetDialog = () => {
        //reset dialog state
        setDialog(prev => { return { open: !prev.open, id: "" } })
    }
    return (
        <div>
            <Typography >Are you sure you want to delete the link?</Typography>
            <div style={{ marginTop: "10%", alignItems: "center" }}>
                <Button onClick={resetDialog} color={"error"}>no</Button>
                <Button
                    onClick={handleClick}
                    sx={{ left: "80%" }}
                    color={"primary"}>yes</Button>
            </div>
        </div>
    )
}

export default Verification
