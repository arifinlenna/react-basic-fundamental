import {
    BrowserRouter, Route, Routes,
    // RouterProvider,
    // useLoaderData,
} from "react-router-dom";
import React from 'react'
import UsersTable from "../views/UsersTable";


function router(params) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<UsersTable/>}/>
                <Route path= "/about">
                    <UsersTable/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default router