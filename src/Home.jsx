import React from 'react'
import Loginpage from './Loginpage'
import  './Homecss.css'
import RegisterPage from './RegisterPage'
import {Routes, Route} from 'react-router-dom'
import ForntPage from './ForntPage'
import Offerpage from './Offerpage'
import Cart from './Cart'
import Search from './Search'
import Signinpage from './Signinpage'
import Titlebar from './Titlebar'

function Home() {
  return (
    <>
       <div >
        <Titlebar />
    <Routes>
         <Route path='/' element={<ForntPage/>}></Route>
         <Route path='/search' element={<Search/>}></Route>
         <Route path='/offer' element={<Offerpage/>}></Route>
         <Route path='/login' element={<Signinpage/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>

      {/* <Route path='/login' element={<Loginpage/>}></Route> */}
      <Route path='/register' element={<RegisterPage/>}></Route>
    </Routes>
       </div>
  
    
    
</>
  )
}

export default Home