import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>Application</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to={"/"}>Home</NavLink>
                        <NavLink className="nav-link" to={"/about"}>About</NavLink>
                        <NavLink className="nav-link" to={"/UserTable"}>User table</NavLink>
                        <NavLink className="nav-link" to={"/FormInput"}>FormInput</NavLink>
                        <NavLink className="nav-link" to={"/Users"}>Users</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
            <div className="py-4">
                {props.children}
            </div>
        </>
    )
}
