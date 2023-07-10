import React from 'react'
import {NavLink} from 'react-router-dom'
import { useRecoilState, useRecoilValue} from 'recoil';
import { getTheme, themeState } from '../store';

export default function Navbar(props) {
    const [theme, setTheme] = useRecoilState(themeState)
    const getThemes = useRecoilValue(getTheme)
    

    function changeTheme(e) {
        setTheme(e.target.value)
    }
    return (
        <div>
            <div className={"h-100 " + (getThemes === 'dark' ? 'bg-dark' : 'bg-light')}>
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
                                <select className="nav-link" aria-label="themes" value={theme} onChange={changeTheme}>
                                    <option value="dark">dark</option>
                                    <option value="light">light</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </nav>
                <div style={{ minHeight: '100vh' }}>
                    <div className="py-4" data-bs-theme={getThemes}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
