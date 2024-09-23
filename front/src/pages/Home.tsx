import { Create, Edit, List } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

function Home() {

    return (
        <div style={{ height: "100%", display: 'flex', flexDirection: 'column' }} >
            <AppBar sx={{ height: "10%" }} position="static">
                <Toolbar sx={{ alignItems: "center" }}>
                    <Typography variant="h4">URL Shortener Implementation</Typography>
                    <IconButton sx={{ right: 0, position: "absolute" }} ><List /></IconButton>
                    <IconButton sx={{ right: 60, position: "absolute" }} ><Create /></IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home
