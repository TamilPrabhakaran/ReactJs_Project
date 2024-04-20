// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './Loginpage'
import RegisterPage from './RegisterPage'
import Products from './Products'
import Rating from './Rating'
import Featured from './Featured'
import User from './User'
import Userdetail from './Userdetail'
import SearchParams from './SearchParams'

function App() {


  return (
    <>
     <Routes>
      
      {/* <Route path='/' element={<Loginpage></Loginpage>}></Route>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/products" element={<Products/>}>
        <Route path='ratings' element={<Rating/>}></Route>
        <Route path='featured' element={<Featured/>}></Route>
      </Route> */}

      <Route path='/user' element={<User/>}></Route>
      <Route path='/user/:id' element={<Userdetail/>}></Route>
      <Route path='/search' element={<SearchParams/>}></Route>
     </Routes>
    </>
  )
}

export default App
