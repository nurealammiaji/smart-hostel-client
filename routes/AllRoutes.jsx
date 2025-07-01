import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../src/App';
import Home from '../src/pages/Home/Home';

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default AllRoutes;