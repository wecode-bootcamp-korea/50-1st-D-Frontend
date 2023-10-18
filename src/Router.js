import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Hwangsoohyeon/Login/Login';
import Join from './pages/Hwangsoohyeon/Join/Join';
import JoinOk from './pages/Hwangsoohyeon/JoinOk/JoinOk';
import Main from './pages/Hwangsoohyeon/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinOk" element={<JoinOk />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
