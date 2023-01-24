import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Client from './pages/client';
import Profession from './pages/profession';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Client />} path='/client' />
        <Route element={<Profession />} path='/profession' />
      </Routes>
    </Router>
  )
}

export default App;





