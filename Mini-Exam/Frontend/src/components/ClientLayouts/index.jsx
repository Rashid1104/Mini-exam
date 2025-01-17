import React from 'react'
import ClientHeader from '../../Layouts/ClientHeadert'
import { Outlet } from 'react-router-dom'

const ClientLaoyuts = () => {
  return (
    <>
  <ClientHeader/>
  <Outlet />
    </>
  )
}

export default ClientLaoyuts