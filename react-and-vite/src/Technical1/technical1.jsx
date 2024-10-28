import React, {useEffect, useState} from "react";
import {Box, Stack, Typography,} from "@mui/material";
import ErrorPage from "../error-page.jsx";
import axios from "axios";
import RowData from "./rowData.jsx";

export default function Technical1() {
    // To make it dynamic for different devices
    // console.log(window.innerWidth)
    // console.log(window.width)
    // if (useCheckMobileScreen()) {
    //     console.log("yes")
    // } else {
    //     console.log("no")
    // }

    const [showResults, setShowResults] = useState(false);
    const [errorResponse, setErrorResponse] = useState("Trouble with contacting API");
    const [racingData, setRacingData] = useState([]);
    const [row, setRow] = useState(<Box/>)

    useEffect(() => {
        async function fetchData() {
            let dataRecieved = await axios.get('https://pitwall.redbullracing.com/api/stats/drivers/2023', {
                headers: {Authorization: ("Bearer <KEY>")}
            })
            setRacingData(dataRecieved.data);
            setShowResults(true)
        }

        fetchData().catch((err) => {
            setShowResults(false)
            setErrorResponse(err.message)
        })
    }, []);

    useEffect(() => {
        if (racingData.length > 0) {
            setRow(() => racingData.map((racing, index) => {
                    return (
                        <RowData key={index} position={index + 1} firstName={racing.first_name} lastName={racing.last_name}
                                 team={racing.season_team_name} points={racing.season_points}/>
                    );
            }))
        }
    }, [racingData]);

    return (
        <>
                {showResults ? (
                    <Box minWidth={360}>
                    <Typography variant="h3" align="center" paddingY={3}>Driver's Standings</Typography>
                    <Stack
                        direction="column"
                        spacing={0.5}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {row}
                    </Stack>
                </Box>
            ) : (<ErrorPage errorGiven={errorResponse}/>)}
        </>
    )
}