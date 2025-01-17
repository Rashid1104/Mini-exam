import React from 'react'
import {Outlet} from "react-router-dom"
import ClientHeader from '../../Layouts/ClientHeader'

const ClientLayouts = () => {
  return (
    <div>
        <ClientHeader/>
        <Outlet/>
    </div>
  )
}

export default ClientLayouts