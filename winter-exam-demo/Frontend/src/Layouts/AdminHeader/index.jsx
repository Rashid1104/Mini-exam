import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/admin/"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/add"}>Add Arrives</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/table"}>Table</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AdminHeader