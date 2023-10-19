import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Hwangsoohyeon/Login/Login';
import Join from './pages/Hwangsoohyeon/Join/Join';
import JoinOk from './pages/Hwangsoohyeon/JoinOk/JoinOk';
import Main from './pages/Hwangsoohyeon/Main/Main';
import PostDetail from './pages/Hwangsoohyeon/PostDetail/PostDetail';
import PostAdd from './pages/Hwangsoohyeon/PostAdd/PostAdd';
import PostEdit from './pages/Hwangsoohyeon/PostEdit/PostEdit';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Hwangsoohyeon.Login" element={<Login />} />
        <Route path="/Hwangsoohyeon.join" element={<Join />} />
        <Route path="/Hwangsoohyeon.joinOk" element={<JoinOk />} />
        <Route path="/Hwangsoohyeon.Main" element={<Main />} />
        <Route path="/Hwangsoohyeon.PostDetail" element={<PostDetail />} />
        <Route path="/Hwangsoohyeon.PostADD" element={<PostAdd />} />
        <Route path="/Hwangsoohyeon.PostEdit" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
