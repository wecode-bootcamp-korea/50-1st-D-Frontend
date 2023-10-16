import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Minji/Login/Login';
import Main from './pages/Minji/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
