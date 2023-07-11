import { Routes ,Route, BrowserRouter } from 'react-router-dom';
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
import Register from '../views/auth/Register';
import AuthenticatedMiddleware from '../middlewares/authenticated';
import GuestMiddleware from '../middlewares/guest';

function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={
                    <AuthenticatedMiddleware>
                        <Navbar>
                            <Home/>
                        </Navbar>
                    </AuthenticatedMiddleware>
                }/>
                <Route 
                    path= "/about" 
                    element={
                        <AuthenticatedMiddleware>
                            <Navbar>
                                <About/>
                            </Navbar>
                        </AuthenticatedMiddleware>
                    }
                />
                <Route 
                    path= "/UserTable" 
                    element={
                        <AuthenticatedMiddleware>
                            <Navbar>
                                <UsersTable/>
                            </Navbar>
                        </AuthenticatedMiddleware>
                    }
                />
                <Route 
                    path= "/FormInput" 
                    element={
                        <AuthenticatedMiddleware>
                            <Navbar>
                                <FormInputFunction/>
                            </Navbar>
                        </AuthenticatedMiddleware>
                    }
                />
                <Route
                    path='/Users'
                    element={
                        <AuthenticatedMiddleware>
                            <Navbar>
                                <Users/>
                            </Navbar>
                        </AuthenticatedMiddleware>
                    }
                />
                <Route
                    path='/Users/:id'
                    element={
                        <AuthenticatedMiddleware>
                            <Navbar>
                                <UsersShow/>
                            </Navbar>
                        </AuthenticatedMiddleware>
                    }
                />

                <Route
                    path='/login'
                    element={
                        <GuestMiddleware>
                            <Login/>
                        </GuestMiddleware>
                    }
                />
                <Route
                    path='/register'
                    element={
                        <GuestMiddleware>
                            <Register/>
                        </GuestMiddleware>
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
        </BrowserRouter>
    )
}

export default routes