import {createBrowserRouter} from "react-router-dom";
import Home from "../home.jsx";
import ErrorPage from "../error-page.jsx";
import Technical1 from "../Technical1/technical1.jsx";
import * as React from "react";
import Technical2 from "../Technical2/technical2.jsx";
import Layout from "./Layout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element:
                    <Home/>,
                errorElement:
                    <ErrorPage/>
            },
            {
                path: "/technical1",
                element:
                    <Technical1/>
            },
            {
                path: "/technical2",
                element:
                    <Technical2/>
            },
        ]
    }
])

export default router;