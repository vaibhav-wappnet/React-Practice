import React from 'react'

import Logo from "../Assets/Logo.png";
import NavbarData from "../Data/NavbarData";

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" aria-label="Offcanvas navbar large">
                    <div className="container">
                        <NavLink className="navbar-brand" href="/">
                            <img className="navbar-logo rounded" src={Logo} height="50px" width="80px" alt="" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-top h-75" tabindex="-1" aria-labelledby="offcanvasNavbar2Label" id="offcanvasNavbar2">
                            <div className="offcanvas-header me-2">
                                <button type="button" class="btn-close btn-close-dark ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                                </button>
                            </div>
                            <div className="offcanvas-body">

                                <ul className="navbar-nav nav ms-auto mb-2 mb-lg-0 text-uppercase align-items-center">
                                    {NavbarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <NavLink className={item.cName2} to={item.path}>{item.title}</NavLink>
                                            </li>
                                        )
                                    })}
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="#">
                                            <button className="btn btn-danger rounded-pill">GET APP</button>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;