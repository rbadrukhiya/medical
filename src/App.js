
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'antd/dist/antd.css'; 
import React from 'react';
import Home from './home';
import { Routes, Route } from "react-router-dom"
import Home_page_style_two from './home-page-style-two';
import './media.css';
import One_page_home from './one-page-home';
import Boxed_home_page from './boxed-home-page';
import About_style_one from './about-style-one';
import About_style_two from './about-style-two';
import Department_grid from './department-grid';
import Department_slider from './department-slider';
import Shop_grid from './shop-grid';
import Login from './login';
import Regestration from "./regestration";





function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    <Routes>
      <Route path='/regestration' element={<Regestration/>}/>
      <Route path='/' element={<Login/> } /> 
      <Route path='/login' element={<Login/> } /> 

      <Route path='/home' element={<Home/>} />
      <Route path='/home-page-style-two' element={<Home_page_style_two/>} />
      <Route path='/one-page-home' element={<One_page_home/>}/>
      <Route path='/boxed-home-page' element={<Boxed_home_page/>}/>
      <Route path='/about-style-one' element={<About_style_one/>}/>
      <Route path='/about-style-two' element={<About_style_two/>}/>
      <Route path='/department-grid' element={<Department_grid/>}/>
      <Route path='/department-slider' element={<Department_slider/>}/>
      <Route path='/shop-grid' element={<Shop_grid/>}/>





    </Routes>
    </div>
  );
}

export default App;
