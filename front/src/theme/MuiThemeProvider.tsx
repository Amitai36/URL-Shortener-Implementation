import {
    CssBaseline,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import React, { ReactNode } from "react";

interface MuiProviderThemeProps {
    children: ReactNode;
}

//Creating a general design related to MUI
function MuiProviderTheme(props: MuiProviderThemeProps) {
    //save chashing
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: "dark",
                    background: {
                        default: "gray",
                    },
                },
                direction: "rtl",
                components: {
                    MuiTextField: {
                        styleOverrides: {
                            root: {
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderRadius: 50,
                                        borderColor: "yellow solid",
                                    },
                                },
                            },
                        },
                    },
                    MuiButton: {
                        defaultProps: { variant: "contained" }
                    }
                },
            }),
        []
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                {props.children}
            </div>
        </ThemeProvider>
    );
}

export default MuiProviderTheme;