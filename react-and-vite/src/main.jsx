import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import themePalette from "./visual/theme.jsx";
import routes from "./routes/router.jsx";
import {ThemeProvider} from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={themePalette}>
            <RouterProvider router={routes}/>
        </ThemeProvider>
    </React.StrictMode>
);