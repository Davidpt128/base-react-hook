import React from 'react'
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <div className='navbar navbar-expand navbar-light bg-dark' data-bs-theme="dark">
            <div className='container'>
                <div className="navbar-nav me-auto">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                    <NavLink className="nav-link" to="/weather">Weather App</NavLink>
                    <NavLink className="nav-link" to="/otp">OTP App</NavLink>
                </div>
            </div>
        </div>
    )
};

export default NavbarComponent;