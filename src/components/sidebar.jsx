import React from 'react'
import { NavLink } from 'react-router-dom';
import modules from './wrapper.module.css'

const Sidebar = () => {
    return <div className={modules.sidebar}>    
    <div className={modules.item}><NavLink activeClassName={modules.active} to="/profile">Profile</NavLink></div>
 <div className={modules.item}><NavLink activeClassName={modules.active} to="/dialogs">Dialogs</NavLink></div>
  <div className={modules.item}><NavLink activeClassName={modules.active} to="/music">Music</NavLink></div>
 <div className={modules.item}><NavLink activeClassName={modules.active} to="/games">Games</NavLink></div>
 <div className={modules.item}><NavLink activeClassName={modules.active} to="/news">News</NavLink></div>
 <div className={modules.item}><NavLink activeClassName={modules.active} to="/settings">Settings</NavLink></div>
 <div className={modules.item}><NavLink activeClassName={modules.active} to="/users">Users</NavLink></div>
    </div>
}

export default Sidebar;