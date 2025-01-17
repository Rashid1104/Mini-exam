import React from 'react'
import AdminHeader from '../../Layouts/AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayouts = () => {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
    </div>
  )
}

export default AdminLayouts