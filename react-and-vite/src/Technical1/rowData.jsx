import {Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import React from "react";

export default function RowData({position, firstName, lastName, team, points} )
{
    if (position === null) {
        return (<Card variant="runnerUp">
            <React.Fragment>
                <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p>No data received</p>
                </CardContent>
            </React.Fragment>
        </Card>)
    } else if (position === 1) {
        return (
            <Card raised sx={{width: "99%"}}>
                <React.Fragment>
                    <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <DisplayData position={position}
                                     firstName={firstName}
                                     lastName={lastName}
                                     team={team}
                                     points={points}/>
                    </CardContent>
                </React.Fragment>
            </Card>
            )
    } else if (position === 2) {
        return (<Card raised sx={{width: "96%"}}>
            <React.Fragment>
                <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <DisplayData position={position}
                                 firstName={firstName}
                                 lastName={lastName}
                                 team={team}
                                 points={points}/>
                </CardContent>
            </React.Fragment>
        </Card>)
    } else if (position === 3) {
        return(<Card raised sx={{width: "93%"}}>
            <React.Fragment>
                <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <DisplayData position={position}
                                 firstName={firstName}
                                 lastName={lastName}
                                 team={team}
                                 points={points}/>
                </CardContent>
            </React.Fragment>
        </Card>)
    } else {
        return (
            <Card variant="runnerUp">
                <React.Fragment>
                    <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <DisplayData position={position}
                                     firstName={firstName}
                                     lastName={lastName}
                                     team={team}
                                     points={points}/>
                    </CardContent>
                </React.Fragment>
            </Card>
        )
    }
}

function DisplayData({position, firstName, lastName, team, points}) {
    return (
        <Stack direction="row"
               divider={<Divider orientation="vertical" flexItem/>}
               spacing={2}>
            <Typography sx={{fontSize: '1.5rem', color:"secondary.main"}}>{position}</Typography>
            <Typography>{firstName} {lastName}</Typography>
            <Typography>{team}</Typography>
            <Typography>{points}</Typography>
        </Stack>
    )
}