import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import WardrobeDecoder from './Pages/WardrobeDecoder';
import Results from './Pages/Results';
import Login from './Pages/Login'; // Import Login page
import Register from './Pages/Register'; // Import Register page

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wardrobe-decoder' element={<WardrobeDecoder />} />
        <Route path='/results' element={<Results />} />
        <Route path='/login' element={<Login />} /> {/* Add Login route */}
        <Route path='/register' element={<Register />} /> {/* Add Register route */}
      </Routes>
    </>
  );
};

export default App;
