import React from 'react'
import './sidebar.css';
import SideBarRow from '../../items/sidebarrow/SideBarRow'
function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow title="Tuan Nguyen"/>
            <SideBarRow title="Tuan Nguyen1"/>
            <SideBarRow title="Tuan Nguyen2"/>
            <SideBarRow title="Tuan Nguyen3"/>
            <SideBarRow title="Tuan Nguyen4"/>
        </div>
    )
}

export default SideBar
