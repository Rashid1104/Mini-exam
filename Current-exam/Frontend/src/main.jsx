
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FavProvider from './components/Context/FavProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';
import BasketProvider from './components/Context/BasketProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <FavProvider>
            <BasketProvider>
                 <HelmetProvider>
                <App />
            </HelmetProvider>
            </BasketProvider>
           
        </FavProvider>
    </BrowserRouter>
)
