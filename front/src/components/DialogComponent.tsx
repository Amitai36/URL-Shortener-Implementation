import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

interface DialogComponentProps {
    open: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    content: React.ReactNode;
    title: { text: string; color: string };
    whenClose?: () => void;
}
//create a generic dialog component using mui
export default function DialogComponent(props: DialogComponentProps) {
    const {
        content,
        open,
        setOpen,
        title: { text, color },
        whenClose,
    } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));//for responsive
    //what will hppend w
    const handleClose = () => {
        setOpen?.(false);
        whenClose?.();
    };

    return (
        <Dialog fullWidth fullScreen={fullScreen} open={open} onClose={handleClose}>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    <Close />
                </Button>
            </DialogActions>
            <DialogTitle textAlign={"center"} sx={{ textDecoration: "underline" }} color={color}>{text}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
        </Dialog>
    );
}