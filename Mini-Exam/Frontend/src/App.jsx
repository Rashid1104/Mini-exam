import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/Client/NotFound'
import Home from './pages/Client/Home'
import ClientLaoyuts from './components/ClientLayouts'
import Basket from './pages/Client/Basket'
import Details from './pages/Client/Details'
import AdminLaoyuts from './components/AdminLaoyuts'
import Dashboard from './pages/Admin/Dashboard'
import AddClothers from './pages/Admin/AddClothers'
import TableClothers from './pages/Admin/TableClothers'
import Contacts from './pages/Client/Contacts'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<ClientLaoyuts/>}>
    <Route index element={<Home />}/>
    <Route path='contacts' element={<Contacts />}/>
    <Route path='/details/:id' element={<Details />}/>
    <Route path='basket' element={<Basket />}/>
    </Route>
    <Route path='/admin' element={<AdminLaoyuts/>}>
    <Route index element={<Dashboard />}/>
    <Route path='add' element={<AddClothers />}/>
    <Route path='table' element={<TableClothers />}/>
    </Route>
    <Route path='*' element={<NotFound />}/>

   </Routes>
    </>
  )
}

export default App
