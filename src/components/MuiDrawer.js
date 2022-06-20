import { Check, Close, ReportProblem } from '@mui/icons-material'
import { Drawer, Typography, Box, Divider, IconButton, Avatar, Card, CardHeader, Chip, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { green, cyan, red } from '@mui/material/colors'
import { MuiAccordion } from './MuiAccordion'
import React from 'react'
import Moment from 'react-moment';

export const MuiDrawer = ({ isDrawerOpen, setIsDrawerOpen, drawerData }) => {
    return (
        <Drawer anchor="right" variant="temporary" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box p={2} width="500px"
                role="presentation"
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" color="primary">
                        User Details
                </Typography>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <Close />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 2 }} />
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={drawerData.risk < 30 ? { bgcolor: green[500] } : drawerData.risk < 60 ? { bgcolor: cyan } : { bgcolor: red[500] }} >{drawerData.risk}</Avatar>

                        }
                        title={
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography variant="h6" color="primary">
                                    Risk
                                </Typography>
                                <Chip variant="contained" color="primary" label="Block User" />
                            </Box>
                        }
                        subheader={
                            <Box sx={{ textAlign: "left", fontWeight: 600 }}>{drawerData.identifier}</Box>}
                    />
                </Card>
                <Box mt={2}>

                    <MuiAccordion title="Details">
                        <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography minWidth={130}>Username:</Typography>
                            <Typography variant="body2">
                                {drawerData.identifier}
                            </Typography>
                        </Box>
                        <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography minWidth={130}>Last Location:</Typography>
                            <Typography variant="body2">
                                {drawerData.location}
                            </Typography>
                        </Box>
                        <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography minWidth={130}>Last Connection:</Typography>
                            <Typography variant="body2">
                                {drawerData.last_connection}
                            </Typography>
                        </Box>
                        <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography minWidth={130}>Signup Date:</Typography>
                            <Typography variant="body2">
                                {drawerData.signup_date}
                            </Typography>
                        </Box>
                        <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography minWidth={130}>Login Successes:</Typography>
                            <Typography variant="body2">
                                {drawerData.login_success}
                            </Typography>
                        </Box>
                        <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography minWidth={130}>Login Failure:</Typography>
                            <Typography variant="body2">
                                {drawerData.login_failure}
                            </Typography>
                        </Box>
                    </MuiAccordion>

                    <MuiAccordion title="User Attributes">
                        <Typography variant="h4">
                            User Attributes
                        </Typography>
                    </MuiAccordion>
                    <MuiAccordion title="Top 1 Ip (Last 30 days)">
                        <Typography variant="h4">
                            Top 1 Ip (Last 30 days)
                        </Typography>
                    </MuiAccordion>
                    <MuiAccordion title="Top Incidents (Last 30 days)">
                        <Typography variant="h4">
                            Top Incidents (Last 30 days)
                        </Typography>
                    </MuiAccordion>
                    <MuiAccordion title="User Activity Timeline">

                        {drawerData.user_activity.length > 0 ?
                            <>
                                {
                                    drawerData.user_activity.map(activity => (
                                        <React.Fragment key={activity.id}>
                                            <ListItem>
                                                <ListItemIcon>
                                                    {activity.critical ?
                                                        <IconButton variant="contained"
                                                            color="secondary" >
                                                            <ReportProblem />
                                                        </IconButton> :
                                                        <IconButton variant="contained"
                                                            color="primary" >
                                                            <Check />
                                                        </IconButton>
                                                    }
                                                </ListItemIcon>
                                                <ListItemText primary={<Box sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between"
                                                }}>
                                                    <Typography>
                                                        {activity.incident}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {activity.ip}
                                                    </Typography>
                                                </Box>}
                                                    secondary={<Moment fromNow>

                                                        {activity.date}
                                                    </Moment>
                                                    } />
                                            </ListItem>
                                            <Divider variant="inset" />
                                        </React.Fragment>

                                    ))
                                }</> :

                            <Typography variant="h4">
                                No User Activity

                                </Typography>

                        }

                    </MuiAccordion>





                </Box>


            </Box>
        </Drawer>
    )
}