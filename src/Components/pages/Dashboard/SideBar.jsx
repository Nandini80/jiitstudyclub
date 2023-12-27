import React from 'react';
import './SideBar.css';
import { SideBarData } from './SideBarData';

function SideBar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
       {SideBarData.map((val,key)=>{
        return(
            <li  key={key} 
            onClick={()=>{window.location.pathname = val.link}} 
            id={window.location.pathname==val.link ? "active":""} 
            className='row'> 
            {" "}
            <div id="icon">{val.icon}</div> 
            <div id="title">{val.title}</div>
            </li>
        );
       })}
       </ul>
    </div>
  );
}

export default SideBar;