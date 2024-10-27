import {createBrowserRouter} from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "../error-page.jsx";
import Technical1 from "../Technical1.jsx";
import * as React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/technical1",
        element: <Technical1/>,
    }
]);

export default router;