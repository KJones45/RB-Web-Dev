import {Box} from "@mui/material";

export default function Home() {
    return (
        <Box paddingX={5}>
            <h3>Navigate through Test Answers</h3>
            <li>
                <a href={`/technical1`}>Technical Test 01 – Data Fetching & Manipulation</a>
            </li>
            <li>
                <a href={`/technical2`}>Technical Test 02 – UI Development</a>
            </li>
        </Box>
    )
}