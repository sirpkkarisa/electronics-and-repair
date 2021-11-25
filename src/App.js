import React,{useState } from "react";
import Admin from "./components/Admin/Admin";
import Home from './components/Public/Home';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Electronics from './components/Public/Electronics';
import Reviews from './components/Public/Reviews'
import Services from './components/Public/Services';
import Error404 from './components/Reusable/Error_404';
import Login from "./components/Reusable/Login";
import RegisterUser from "./components/Admin/RegisterUser";

const App =()=> {
  const [isLoggedIn, setLogIn] = useState(true)
  // const [isAdmin, setIsAdmin] = useState(false)

  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='' element={<Electronics/>}/>
          <Route path='electronics' element={<Electronics/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/portal' element={isLoggedIn? <Admin/>: <Navigate to='/login' element={<Login/>}/>}/>
        <Route path='/register' element={<RegisterUser/>}/>
        <Route path='/*' element={<Error404/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
