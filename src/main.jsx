import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter} from 'react-router-dom' 
import App from './App.jsx'
// import './index.css'
import Home from './Home'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  
     <BrowserRouter>
      <Home />
     </BrowserRouter>
     
   
 
)
