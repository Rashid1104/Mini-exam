
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayouts from './components/ClientLayouts'
import Home from './pages/client/Home'
import Favorite from './pages/client/Favorite'
import Shop from './pages/client/Shop'
import Contact from './pages/client/Contacts/indeex'
import NotFound from './pages/client/NotFound'
import AdminLayouts from './components/AdminLayouts'
import Dashboard from './pages/Admin/Dashboard'
import Add from './pages/Admin/Add'
import Details from './pages/client/Details'
import TableArrivalls from './pages/Admin/Table'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayouts />}>
          <Route index element={<Home />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='shop' element={<Shop />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='shop/details/:id' element={<Details />} />
          <Route path='favorite/details/:id' element={<Details />} />
          <Route path='contacts' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<AdminLayouts />}>
          <Route index element={<Dashboard />} />
          <Route path='add' element={<Add />} />
          <Route path='table' element={<TableArrivalls />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
