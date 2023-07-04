import { Routes ,Route } from 'react-router-dom';
import React from 'react'
import UsersTable from "../views/UsersTable";
import About from '../views/About';
import Home from '../views/Home'
import FormInputFunction from '../views/FormInputFunction';
import Navbar from '../components/Navbar';
import NotFound from '../views/NotFound';

function routes() {
    return (
        <Routes>
            <Route path= "/" element={
                <>
                    <Navbar>
                        <Home/>
                    </Navbar>
                </>
            }/>
            <Route 
                path= "/about" 
                element={
                    <>
                        <Navbar>
                            <About/>
                        </Navbar>
                    </>
                }
            />
            <Route 
                path= "/UserTable" 
                element={
                    <>
                        <Navbar>
                            <UsersTable/>
                        </Navbar>
                    </>
                }
            />
            <Route 
                path= "/FormInput" 
                element={
                    <>
                        <Navbar>
                            <FormInputFunction/>
                        </Navbar>
                    </>
                }
            />
            <Route
            path= "*" 
                element={
                    <>
                        <NotFound/>
                    </>
                }
            />
        </Routes>
    )
}

export default routes