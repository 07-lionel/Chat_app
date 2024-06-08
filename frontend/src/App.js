import './App.scss';
import './css/w3.css'

import Homepage from './components/home/homepage'
import Register from './components/register/Register'
import Login from './components/login/Login'
import {BrowserRouter , Routes, Route} from "react-router-dom";
// import {useState} from 'react';

function App() {
  // const [user,setLoginUser]=useState()
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
