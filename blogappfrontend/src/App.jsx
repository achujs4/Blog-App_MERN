import React from 'react'
import Home from '../components/Home'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup'
import Addblog from '../components/Addblog'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import PrivateRoutes from '../components/PrivateRoutes'


const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Home/>  */}
      {/* <Login/>  */}
      
     
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* component is passesd as a prop */}
        {/* here the home is passed as aprop to main and the props name is child */}
      <Route element= {<PrivateRoutes/>}>

        <Route path="/blogs" element={<Main child={<Home/>} />}></Route>
        <Route path="/addblogs" element={<Main child={<Addblog/>} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App
