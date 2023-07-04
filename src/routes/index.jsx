import { Routes ,Route } from 'react-router-dom';
import React from 'react'
import UsersTable from "../views/UsersTable";
import About from '../views/About';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import Users from '../views/users/Index';
import UsersShow from '../views/users/Show';
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
                path='/login'
                element={
                    <>
                        <Login/>
                    </>
                }
            />
            <Route
                path='/Users'
                element={
                    <>
                        <Navbar>
                            <Users/>
                        </Navbar>
                    </>
                }
            />
            <Route
                path='/Users/:id'
                element={
                    <>
                        <Navbar>
                            <UsersShow/>
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