import React from 'react'
import AdminHeader from '../../Layouts/AdminHeader'
import { Outlet } from "react-router-dom"

const AdminLaoyuts = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet />
    </>
  )
}

export default AdminLaoyuts