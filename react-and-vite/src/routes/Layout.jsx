import * as React from "react";
import {AppBar, Button, Container, Grid2, Stack, Toolbar} from "@mui/material";
import {Outlet} from "react-router-dom";
import logo from '../photos/RedBullRacing-logo.png';

export default function Layout() {
    const pages = ['Technical Test 01', 'Technical Test 02'];

    const [location, setLocation] = React.useState(null);

    function PageNav(page) {
        console.log("hit")
        if (location !== page) {
            if (page === 'Technical Test 01') {
                window.location.href = '/technical1'
                setLocation(page);
            } else if (page === 'Technical Test 02') {
                window.location.href = '/technical2'
                setLocation(page);
            } else if (page === 'Home') {
                window.location.href = '/technical2'
                setLocation(page);
            }
        }
    }

    return (
        <Grid2 container minWidth={300} minHeight={60} spacing={2}>
            <Grid2 size={12} minHeight={60}>
                <AppBar position="static" color={"primary"}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <a href={"/"}><img width={200} height={36} alt={"logo"} src={logo}/></a>
                            <Stack direction={"row"} spacing={2}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => PageNav(page)}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Stack>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Grid2>
            <Grid2 size={1}>
            </Grid2>
            <Grid2 size={10}>
                <Outlet/>
            </Grid2>
            <Grid2 size={1}>
            </Grid2>
        </Grid2>
    )
}