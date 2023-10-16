import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputid, setinputid] = useState('');
  const [inputpw, setinputpw] = useState('');

  const goToJoin = () => {
    navigate('/Join');
  };

  const saveUserId = (e) => {
    setinputid(e.target.value);
    console.log(inputid);
  };

  const saveUserPw = (e) => {
    setinputpw(e.target.value);
    console.log(inputpw);
  };

  const able = inputid.indexOf('@') !== -1 && inputpw.length >= 5;

  return (
    <>
      <div className="login">
        <div className="Splash">
          <img className="logo" src="./images/Logo.png" alt="Logo" />
          <img
            className="wecodelogo"
            src="./images/logo_wecode.png"
            alt="wecode_logo"
          />
        </div>

        <div className="login2">
          <div className="inputWrap">
            <input
              type="text"
              placeholder="이메일"
              onChange={saveUserId}
              value={inputid}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
              value={inputpw}
            />

            <button disabled={!able}>로그인</button>
          </div>

          <div className="login_option">
            <button className="회원가입" onClick={goToJoin}>
              회원가입
            </button>
            <hr></hr>
            <button className="비밀번호찾기">비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
