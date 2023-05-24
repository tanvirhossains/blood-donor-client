import React from 'react';
import Home from '../Pages/Home/Home';

import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../Pages/SignInUp/SignIn';
import About from '../Pages/About/About';
import Profile from '../Pages/UserProfile/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "signin",
                element: <SignIn />,
                // loader: redirectIfUser,
            },
            {
                path: "signup",
                element: <SignIn />,
                // loader: redirectIfUser,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            // {
            //     path: "dashboard",
            //     element: <Dashboard />,
            //     loader: ({ request }) =>
            //         fetch("/api/dashboard.json", {
            //             signal: request.signal,
            //         }),
            // },
            // {
            //     element: <AuthLayout />,
            //     children: [
            //         {
            //             path: "login",
            //             element: <SignUp />,
            //             // loader: redirectIfUser,
            //         },

            //     ],
            // },
        ],
    },
]);



export default router;