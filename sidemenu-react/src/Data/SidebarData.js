import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaAddressBook />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <FaIcons.FaCode />,
        cName: 'nav-text'
    },
    {
        title: 'Notification',
        path: '/',
        icon: <IoIcons.IoMdNotifications />,
        cName: 'nav-text'
    },
    {
        title: 'Hey!',
        path: 'heart',
        icon: <FaIcons.FaHeart />,
        cName: 'nav-text'
    }
]

export default SidebarData;