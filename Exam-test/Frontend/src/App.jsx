import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './components/ClientLayout'
import Home from './pages/client/Home'
import Details from './pages/client/Details'
import Favorite from './pages/client/Favorites'
import NotFound from './pages/client/NotFound'
import Menu from './pages/client/Menu'
import Basket from './pages/client/Basket'
import Contacts from './pages/client/Contacts'
import AdminLayout from './components/AdminLayout'
import Add from './pages/Admin/Add'
import Dashboard from './pages/Admin/dashboard'
import TableDish from './pages/Admin/Table'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<ClientLayout />}>
      <Route index element={<Home />} />
      <Route path='details/:id' element={<Details />} />
      <Route path='menu/details/:id' element={<Details />} />
      <Route path='wishlist' element={<Favorite />} />
      <Route path='menu' element={<Menu />} />
      <Route path='basket' element={<Basket />} />
      <Route path='contacts' element={<Contacts />}/>
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='add' element={<Add />} />
      <Route path='table' element={<TableDish />} />
      </Route>
      <Route path='*' element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
