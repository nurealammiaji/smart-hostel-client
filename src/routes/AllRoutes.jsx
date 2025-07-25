import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Students from '../pages/Students/Students';
import Stocks from '../pages/Stocks/Stocks';
import Foods from '../pages/Foods/Foods';
import Seats from '../pages/Seats/Seats';
import Payments from '../pages/Payments/Payments';
import Complaints from '../pages/Complaints/Complaints';
import Notices from '../pages/Notices/Notices';
import Profile from './../pages/Profile/Profile';
import AddStudent from '../pages/Students/AddStudent/AddStudent';
import AddStock from '../pages/Stocks/AddStock/AddStock';
import AddFood from './../pages/Foods/AddFood/AddFood';
import AddSeat from './../pages/Seats/AddSeat/AddSeat';
import AddComplaint from '../pages/Complaints/AddComplaint/AddComplaint';
import AddNotice from './../pages/Notices/AddNotice/AddNotice';
import EditProfile from '../pages/Profile/EditProfile/EditProfile';
import AddPayment from './../pages/Payments/AddPayment/AddPayment';
import ViewProfile from './../pages/Profile/ViewProfile/ViewProfile';
import SearchStudent from '../pages/Students/SearchStudent/SearchStudent';
import AllStudents from '../pages/Students/AllStudents/AllStudents';

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
                path: "/search",
                element: <Search />
            },
            {
                path: "/students",
                element: <Students />,
                children: [
                    {
                        path: "/students/add",
                        element: <AddStudent />
                    },
                    {
                        path: "/students/search",
                        element: <SearchStudent />
                    },
                    {
                        path: "/students/all",
                        element: <AllStudents />
                    }
                ]
            },
            {
                path: "/stocks",
                element: <Stocks />,
                children: [
                    {
                        path: "/stocks/add",
                        element: <AddStock />
                    }
                ]
            },
            {
                path: "/foods",
                element: <Foods />,
                children: [
                    {
                        path: "/foods/add",
                        element: <AddFood />
                    }
                ]
            },
            {
                path: "/seats",
                element: <Seats />,
                children: [
                    {
                        path: "/seats/add",
                        element: <AddSeat />
                    }
                ]
            },
            {
                path: "/payments",
                element: <Payments />,
                children: [
                {
                    path: "/payments/add",
                    element: <AddPayment />
                }
                ]
            },
            {
                path: "/complaints",
                element: <Complaints />,
                children: [
                    {
                        path: "/complaints/add",
                        element: <AddComplaint />
                    }
                ]
            },
            {
                path: "/notices",
                element: <Notices />,
                children: [
                    {
                        path: "/notices/add",
                        element: <AddNotice />
                    }
                ]
            },
            {
                path: "/profile",
                element: <Profile />,
                children: [
                    {
                        path: "/profile/view",
                        element: <ViewProfile />
                    },
                    {
                        path: "/profile/edit",
                        element: <EditProfile />
                    }
                ]
            }
        ]
    }
])

export default AllRoutes;