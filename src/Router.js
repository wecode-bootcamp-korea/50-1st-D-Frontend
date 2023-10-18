import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Minji/Login/Login';
import Join from './pages/Minji/Main/Join';
import DoneJoin from './pages/Minji/Main/DoneJoin';
import Thread from './pages/Minji/Thread/Thread';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/minji.join" element={<Join />} />
        <Route path="/minji.donejoin" element={<DoneJoin />} />
        <Route path="/minji.thread" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
