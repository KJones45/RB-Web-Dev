import {Box} from "@mui/material";

export default function Root() {
    return (
        <Box sx={{
            width: "window.innerWidth"}}>
            <h1>Navigate through Test Answers</h1>
            <li>
                <a href={`/technical1`}>Technical Test 01 – Data Fetching & Manipulation</a>
            </li>
            <li>
                <a href={`/technical2`}>Technical Test 02 – UI Development</a>
            </li>
        </Box>
    )
}