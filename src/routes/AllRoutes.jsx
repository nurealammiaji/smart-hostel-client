import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Home from '../pages/Home/Home';
import Students from '../pages/Students/Students';
import Stocks from '../pages/Stocks/Stocks';
import Foods from '../pages/Foods/Foods';
import Seats from '../pages/Seats/Seats';
import Fees from '../pages/Fees/Fees';
import Complaints from '../pages/Complaints/Complaints';
import Notices from '../pages/Notices/Notices';
import Profile from './../pages/Profile/Profile';

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/students",
                element: <Students />
            },
            {
                path: "/stocks",
                element: <Stocks />
            },
            {
                path: "/foods",
                element: <Foods />
            },
            {
                path: "/seats",
                element: <Seats />
            },
            {
                path: "/fees",
                element: <Fees />
            },
            {
                path: "/complaints",
                element: <Complaints />
            },
            {
                path: "/notices",
                element: <Notices />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

export default AllRoutes;