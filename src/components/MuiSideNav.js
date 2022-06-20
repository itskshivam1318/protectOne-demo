
import { Box, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import HandymanIcon from '@mui/icons-material/Handyman';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';





export const MuiSideNav = ({ open, setOpen }) => {
    const listOne = [
        {
            icon: < DashboardIcon />,
            menu: "Dashboard"
        },
        {
            icon: < AccountTreeIcon />,
            menu: "Dependencies"
        },
        {
            icon: < LockIcon />,
            menu: "Security"
        },
        {
            icon: < GppMaybeIcon />,
            menu: "Incidents"
        },
        {
            icon: < CloudDownloadIcon />,
            menu: "API Security"
        },
        {
            icon: < PersonIcon />,
            menu: "User Activity"
        }
    ]
    const listTwo = [
        {
            icon:
                < HandymanIcon />,
            menu: "Application Map"
        }, {
            icon:
                < BookIcon />,
            menu: "Playbooks"
        }, {
            icon:
                < SettingsIcon />,
            menu: "Setting"
        }
    ]
    return (
        <>
            <Box sx={{ mt: 4, alignItems: "center" }}>
                <List>
                    {listOne.map((item, i) => (
                        <ListItem key={i}>
                            <ListItemButton >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                {
                                    open ?
                                        <ListItemText primary={item.menu} /> : ""
                                }
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider orientation="horizontal" />
                <List>
                    {listTwo.map((item, i) => (
                        <ListItem key={i}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                {
                                    open ?
                                        <ListItemText primary={item.menu} /> : ""
                                }
                            </ListItemButton>
                        </ListItem>

                    ))}


                </List>
            </Box>


        </>
    )
}