
import { Box, Stack, Typography, Divider, Paper, Tab } from "@mui/material"
import { TabList, TabContext, TabPanel } from '@mui/lab'
import { MuiTable } from './MuiTable'
import { useState } from 'react'
export const Dashboard = () => {
    const [value, setValue] = useState('1')
    return (
        <>
            <Box sx={{ m: 4 }}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    sx={{ mb: 2 }}
                >
                    <Typography variant="h5">
                        User Activity
                    </Typography>
                    <Typography variant="h5">
                        Hospital Management System
                </Typography>
                </Stack>
                <Paper sx={{ padding: "20px", borderRadius: "15px" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList aria-label="User activity tab" onChange={(e, newValue) => setValue(newValue)}>
                                <Tab label="User Monitering" value="1" />
                                <Tab label="Block users" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <MuiTable />
                        </TabPanel>
                        <TabPanel value="2">Two</TabPanel>
                    </TabContext >
                </Paper>
            </Box>
        </>
    )
}