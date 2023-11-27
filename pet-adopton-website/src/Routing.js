import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Registration from './components/Registration';
import Home from './components/Home';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};