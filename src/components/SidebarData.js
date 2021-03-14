import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
       title: 'Finacular',
        path : '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
         path : '/dashboard',
         icon: <IoIcons.IoIosPaper/>,
         cName: 'nav-text'
     },
     {
        title: 'Assets',
         path : '/assets',
         icon: <FaIcons.FaCartPlus/>,
         cName: 'nav-text'
     },
     {
        title: 'Tracker',
         path : '/tracker',
         icon: <IoIcons.IoMdPeople/>,
         cName: 'nav-text'
     },
     {
        title: 'Planning & Advisory',
         path : '/planning&advisory',
         icon: <FaIcons.FaTripadvisor/>,
         cName: 'nav-text'
     },
]