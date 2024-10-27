import React from "react";
import {Box, Card, CardContent, Stack, Typography,} from "@mui/material";
import useCheckMobileScreen from "./visual/deviceType.jsx";
import axios from "axios";

export default function Technical1() {
    const row = (
        <React.Fragment>
            <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Stack spacing={2} direction="row">
                    <Typography>1</Typography>
                    <Typography>Max Verstappen</Typography>
                    <Typography>NED</Typography>
                    <Typography>Red Bull Racing Honda RBPT</Typography>
                    <Typography>354</Typography>
                </Stack>
            </CardContent>
        </React.Fragment>
    );

    console.log(window.innerWidth)
    if (useCheckMobileScreen()) {
        console.log("yes")
    } else {
        console.log("no")
    }

// Make a request for a user with a given ID
    axios.get('https://pitwall.redbullracing.com/api/stats/drivers/2023', {
        headers: {Authorization: ("Bearer {CODE HERE}")}
    })
        .then(function (response) {
            // handle success
            console.log(response);
        })

    return (
        <Box width={window.innerWidth} minWidth={360}>
            <h1 align="center">Driver's Standings</h1>
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card raised={true} sx={{width: "99%", backgroundColor: "primary.main"}}>{row}</Card>
                <Card variant="outlined" sx={{width: "96%", backgroundColor: "primary.main"}}>{row}</Card>
                <Card variant="outlined" sx={{width: "93%", backgroundColor: "primary.main"}}>{row}</Card>
                <Card variant="outlined" sx={{width: "90%"}}>{row}</Card>
                <Card variant="outlined" sx={{width: "90%"}}>{row}</Card>
                <Card variant="outlined" sx={{width: "90%"}}>{row}</Card>
                <Card variant="outlined" sx={{width: "90%"}}>{row}</Card>
            </Stack>
        </Box>
    )
}