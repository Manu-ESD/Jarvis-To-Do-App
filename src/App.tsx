import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Login } from './compoenets/Login';
import './App.css';
import Home from './compoenets/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
