import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FavProvider from './components/context/FavProvider.jsx'
import BasketProvider from './components/context/BasketProvider.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <FavProvider>
  <BasketProvider>
  <App />
  </BasketProvider>
 </FavProvider>
 </BrowserRouter>
)
