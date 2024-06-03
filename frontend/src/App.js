import logo from './logo.svg';
import './App.scss';
import './css/w3.css'

import Homepage from './components/home/homepage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import {BrowserRouter , Router, Routes, Route
} from "react-router-dom";
import {useState} from 'react';

function App() {
  const [user,setLoginUser]=useState()
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/> 
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
