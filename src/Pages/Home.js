import { useState } from 'react'
import { Box, Grid } from "@mui/material"

import { MuiNavbar } from '../components/MuiNavbar'
import { MuiSideNav } from '../components/MuiSideNav'
import { Dashboard } from '../components/DashBoard'

import './Home.css'

export const Home = () => {
    const [open, setOpen] = useState(false);




    return (
        <>
            <Box className="main" sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
                <MuiNavbar open={open} setOpen={setOpen} />
                <Grid container>
                    <Grid item xs={open ? 2 : 1}>
                        <MuiSideNav open={open} setOpen={setOpen} />
                    </Grid>
                    <Grid item xs={open ? 10 : 11}>
                        <Dashboard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}