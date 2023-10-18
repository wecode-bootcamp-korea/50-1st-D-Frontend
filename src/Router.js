import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import KimCodeLogin from './pages/KimCode/Login/Login';
// import KimCodeMain from './pages/KimCode/Main/Main';

import Login from './pages/Hwangsoohyeon/Login/Login';
import Join from './pages/Hwangsoohyeon/Join/Join';
import Join_ok from './pages/Hwangsoohyeon/Join/Join_ok';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/kimcode-login" element={<KimCodeLogin />} />
        <Route path="/kimcode-main" element={<KimCodeMain />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join_ok" element={<Join_ok />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
