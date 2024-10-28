import * as React from "react";
import {AppBar, Box, Button, Container, Grid2, Toolbar, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";

export default function Layout() {
    const pages = ['Technical Test 01', 'Technical Test 02'];

    const [location, setLocation] = React.useState(null);

    function PageNav(page) {
        if (location !== page) {
            if (page === 'Technical Test 01') {
                window.location.href = '/technical1'
                setLocation(page);
            } else if (page === 'Technical Test 02'){
                window.location.href = '/technical2'
                setLocation(page);
            } else {
                window.location.href = '/'
                setLocation(page);
            }
        }
    }
    return (
        <Grid2 container minWidth={300} spacing={2}>
            <Grid2 size={12}>
                <AppBar position="static" color={"primary"}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Red Bull F1
                            </Typography>
                            <Box width="20px"/>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => PageNav(page)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
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