import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Minji/Login/Login';
import Join from './pages/Minji/Main/Join';
import DoneJoin from './pages/Minji/Main/DoneJoin';
import Thread from './pages/Minji/Thread/Thread';
import PostAdd from './pages/Minji/Thread/PostAdd';
import PostEdit from './pages/Minji/Thread/PostEdit';
import PostDetail from './pages/Minji/Thread/PostDetail';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/minji-join" element={<Join />} />
        <Route path="/minji-donejoin" element={<DoneJoin />} />
        <Route path="/minji-thread" element={<Thread />} />
        <Route path="/minji-postadd" element={<PostAdd />} />
        <Route path="/minji-postedit" element={<PostEdit />} />
        <Route path="/minji-postdetail" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
