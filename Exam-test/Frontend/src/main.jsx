
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Favprovider from './components/context/Favprovider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Favprovider >
  <App />
  </Favprovider>
  </BrowserRouter>
)
