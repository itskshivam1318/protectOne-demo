import { Computer, Menu, Search, Notifications, ArrowDownward } from "@mui/icons-material"
import { Grid, AppBar, IconButton, Toolbar, Box, TextField, InputAdornment, Chip, Badge, Avatar, Button, Stack } from "@mui/material"


export const MuiNavbar = ({ open, setOpen }) => {
    return (
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={1}>
                <IconButton size='large' edge='start' aria-label="logo">
                    <img src="https://protectonce.com/wp-content/uploads/2021/11/logo.png" alt="protect one logo" minwidth="100px" />
                </IconButton>
            </Grid>
            <Grid item xs={10}>

                <AppBar position="static" open={open} sx={{ backgroundColor: "white", borderRadius: "50px", ml: 10 }}>
                    <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>

                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="open drawer"
                                onClick={() => setOpen(!open)}
                                sx={{ mr: 2 }}
                            >
                                <Menu />
                            </IconButton>
                            <TextField
                                sx={{ backgroundColor: "white" }}
                                placeholder="Select Application"
                                size="small"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position='start'>
                                            <IconButton>
                                                <Search />
                                            </IconButton>
                                        </InputAdornment>
                                }}
                            />
                        </Box>

                        <Box >
                            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                                <Chip
                                    icon={<Computer />}
                                    label="Demo"
                                    variant="Outlined"
                                />
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                >
                                    <Badge badgeContent={12} color="error">
                                        <Notifications />
                                    </Badge>
                                </IconButton>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>S</Avatar>
                                <Button variant="text" endIcon={<ArrowDownward />}>
                                    Super Admin
                                </Button>


                            </Stack>
                        </Box>


                    </Toolbar>

                </AppBar>



            </Grid>
        </Grid>

    )
}