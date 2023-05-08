import React from 'react'
import '@/styles/app.css'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <Provider store = {store}>
     <App />  
     </Provider>
       
     </BrowserRouter>
 
  </React.StrictMode>,
)
