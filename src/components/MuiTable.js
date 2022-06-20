import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    Paper,
    TableCell,
    Box,
    Chip,

} from '@mui/material'
import { MuiDrawer } from './MuiDrawer'
import { green, cyan, red } from '@mui/material/colors'
import SortIcon from '@mui/icons-material/Sort';
import React, { useState, useMemo } from 'react'
import DATA from '../MOCK_DATA.json'
import Moment from 'react-moment';


export const MuiTable = () => {
    const [data, setData] = useState([])
    const [asecOrder, setAsecOrder] = useState(true)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerData, setDrawerData] = useState({
        "id": 3,
        "workload": "Namfix",
        "identifier": "aVJIO7Fk-n3SH-tM2n-lqXA-H7djl6Fvy",
        "risk": 69,
        "login_attempts": 11,
        "location": "China",
        "last_connection": "2021-02-08T05:34:16Z",
        "signup_date": "2020-11-27T02:50:08Z",
        "login_success": "2021-08-26T16:35:03Z",
        "login_failure": 53,
        "user_activity": []
    })

    useMemo(() => setData(DATA), [])



    const tHead = {
        backgroundColor: "rgb(224 224 224)",
        borderRight: "1px solid darkGray"
    }
    const headCell = {
        display: " flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
    }

    const handleSort = (column) => {
        const sorted = [...data].sort((a, b) => asecOrder ? a[column] < b[column] ? -1 : 1 : a[column] < b[column] ? 1 : -1)
        setData(sorted)
        setAsecOrder(!asecOrder)
    }

    const handleDrawer = (id) => {
        setIsDrawerOpen(true)
        setDrawerData(data.filter(item => id === item.id)[0])

    }

    return (
        <>
            <TableContainer component={Paper} sx={{ height: "460px" }}>
                <Table aria-label="user monitoring" stickyHeader>
                    <TableHead>
                        <TableRow >
                            <TableCell align='center' sx={tHead} onClick={() => handleSort("workload")}>
                                <Box sx={headCell}>
                                    Workload
                                        <SortIcon />
                                </Box>
                            </TableCell>
                            <TableCell align='center' sx={tHead} onClick={() => handleSort("risk")}>
                                <Box sx={headCell}>
                                    Risk
                                <SortIcon />
                                </Box>
                            </TableCell>

                            <TableCell align='center' sx={tHead} onClick={() => handleSort("identifier")}>
                                <Box sx={headCell}>
                                    Identifier
                                <SortIcon />
                                </Box>
                            </TableCell>
                            <TableCell align='center' sx={tHead} onClick={() => handleSort("login_attempts")}>
                                <Box sx={headCell}>
                                    Login Attempts
                                <SortIcon />
                                </Box>
                            </TableCell>
                            <TableCell align='center' sx={tHead} onClick={() => handleSort("location")}>
                                <Box sx={headCell}>
                                    Last Location
                                <SortIcon />
                                </Box>
                            </TableCell>
                            <TableCell align='center' sx={tHead} onClick={() => handleSort("last_connection")}>
                                <Box sx={headCell}>
                                    Last Connection
                                <SortIcon />
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(item => (
                                <React.Fragment key={item.id}>
                                    <TableRow data-testid={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => handleDrawer(item.id)}
                                    >
                                        <TableCell>{item.workload}</TableCell>
                                        <TableCell sx={item.risk < 30 ? { color: green[500] } : item.risk < 60 ? { color: 'primary.main' } : { color: red[500] }}>{item.risk}</TableCell>
                                        <TableCell>{item.identifier}</TableCell>
                                        <TableCell>
                                            <Chip label={item.login_attempts} color="success" />
                                            <Chip label={item.login_failure} color="error" /></TableCell>
                                        <TableCell>{item.location}</TableCell>
                                        <TableCell align='center'>
                                            <Moment fromNow>
                                                {item.last_connection}
                                            </Moment>
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <MuiDrawer drawerData={drawerData} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />

        </>
    )
}