import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import SidebarData from "../Data/SidebarData";
import "../Styles/Navbar.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons';

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color:"#fff"}}>

                <div className="navbar-container">
                    <NavLink to="#" className="navbar-menu menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavLink>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <NavLink to="/" className="menu-bars cross">
                            <AiIcons.AiOutlineClose />
                            </NavLink>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;