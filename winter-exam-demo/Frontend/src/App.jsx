import './App.css'
import { Routes, Route } from "react-router-dom"
import NotFound from './pages/Client/NotFound'
import ClientLayout from './components/ClientLayouts'
import AdminLayout from './components/AdminLayout'
import Home from './pages/Client/Home'
import Dashboard from './pages/Admin/Dashboard'
import TableArrives from './pages/Admin/Table'
import Add from './pages/Admin/Add'
import Favorite from './pages/Client/Favorites'
import Shop from './pages/Client/Shop'
import Basket from './pages/Client/Basket'
import Contact from './pages/Client/Contact'
import Details from './pages/Client/Details'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='basket' element={<Basket />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='shop/details/:id' element={<Details />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='add' element={<Add />} />
          <Route path='table' element={<TableArrives />} />

          <Route />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
