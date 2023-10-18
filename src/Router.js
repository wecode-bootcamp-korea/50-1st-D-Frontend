import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Minji/Login/Login';
import Main from './pages/Minji/Main/Main';
import Join from './pages/Minji/Main/Join';
import Thread from './pages/Minji/Thread/Thread';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/minji.main" element={<Main />} />
        <Route path="/minji.join" element={<Join />} />
        <Route path="/minji.thread" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
