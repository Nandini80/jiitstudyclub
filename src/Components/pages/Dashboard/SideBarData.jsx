import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/AccountCircle';
import Cart from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SideBarData=[
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/",
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/dashboard",
    },
    {
        title:"Cart",
        icon:<Cart />,
        link:"/cart",
    },
    {
        title:"Profile",
        icon:<Profile />,
        link:"/profile",
    },
    {
        title:"Settings",
        icon:<SettingsIcon />,
        link:"/settings",
    },
];