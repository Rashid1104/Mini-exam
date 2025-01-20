import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/ClientLayouts'
import Home from './pages/Client/Home'
import Favorite from './pages/Client/Favorites'
import Basket from './pages/Client/Basket'
import Contact from './pages/Client/Contacts'
import Oclocks from './pages/Client/Oclock'
import Details from './pages/Client/Details'
import NotFound from './pages/Client/NotFound'
import Add from './pages/Admin/AddClock'
import TableClocks from './pages/Admin/TableClock'
import Dashboard from './pages/Admin/Dashboard'
import AdminLayout from './components/AdminLayouts'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<ClientLayout/>} >
        <Route index elemen={<Home/>}/>
        <Route path='favorite' element={<Favorite/>}/>
        <Route path='basket' element={<Basket/>}/>
        <Route path='details/:id' element={<Details/>}/>
        <Route path='oclocks/details/:id' element={<Details/>}/>
        <Route path='oclocks' element={<Oclocks/>}/>
        <Route path='contact' element={<Contact/>}/>       
      </Route>
      <Route path='/admin' element={<AdminLayout/>} >
        <Route index element={<Dashboard/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='table' element={<TableClocks/>}/>      
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
