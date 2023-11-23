import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Nabvar/Navbar';
import Team from './Pages/Team';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Testimonial from './Pages/Testimonial';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/team' element={<Team/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
     </Routes>
     <Subscribe/>
     <Footer/>
     </BrowserRouter>



    </div> 
  );
};

export default App;
