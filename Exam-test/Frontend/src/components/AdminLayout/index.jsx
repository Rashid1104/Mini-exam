import React from 'react'
import AdminHeader from '../../Layouts/AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <Outlet/>

    </>
  )
}

export default AdminLayout