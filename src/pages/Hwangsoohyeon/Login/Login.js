import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const goToJoin = () => {
    navigate('/Hwangsoohyeon.join');
  };

  const goToMain = () => {
    fetch('http://10.58.52.70:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'LOG_IN_SUCCESS') {
          localStorage.setItem('token', res.token);
          alert('로그인 성공');
          navigate('/Hwangsoohyeon.Main');
        } else {
          alert('로그인 실패');
          navigate('/Hwangsoohyeon.join');
        }
      });
  };

  const saveUserId = (e) => {
    setInputId(e.target.value);
  };

  const saveUserPw = (e) => {
    setInputPw(e.target.value);
  };

  const able = inputId.indexOf('@' && '.') !== -1 && inputPw.length >= 10;

  return (
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
            value={inputId}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            value={inputPw}
          />

          <button disabled={!able} onClick={goToMain}>
            로그인
          </button>
        </div>

        <div className="login_option">
          <button className="회원가입" onClick={goToJoin}>
            회원가입
          </button>
          <hr />
          <button className="비밀번호찾기">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
