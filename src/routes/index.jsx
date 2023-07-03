import { Routes ,Route } from 'react-router-dom';
import React from 'react'
import UsersTable from "../views/UsersTable";
import About from '../views/About';
import Home from '../views/Home'
import FormInputFunction from '../views/FormInputFunction';

function routes() {
    return (
        <Routes>
            <Route 
                path= "/" 
                element={<Home/>}
            />
            <Route 
                path= "/about" 
                element={<About/>}
            />
            <Route 
                path= "/UserTable" 
                element={<UsersTable/>}
            />
            <Route 
                path= "/FormInput" 
                element={<FormInputFunction/>}
            />
        </Routes>
    )
}

export default routes