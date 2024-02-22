import React from "react";
import {MainLayout} from "./layouts";

import {createBrowserRouter, Navigate} from "react-router-dom";
import {PostsPage, UsersDetailsPage, UsersPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/> ,children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>, children: [
                    {
                        path: ':id', element: <UsersDetailsPage/>
                    }
                ]
            },
            {
                path: 'posts', element: <PostsPage/>
            }
        ]
    }
])

export {
    router
}