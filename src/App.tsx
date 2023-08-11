import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Login } from './compoenets/Login';
import './App.css';
import Home from './compoenets/Home';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
