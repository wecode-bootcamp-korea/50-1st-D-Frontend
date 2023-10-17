import React, { useState } from 'react';
import './Login.scss';
import Logo1 from '../../image/Logo.png';
import Logo2 from '../../image/logo_wecode.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [users, setUsers] = useState('');
  const [pwd, setPwd] = useState('');

  const saveUserid = (e) => {
    setUsers(e.target.value);
  };

  const saveUserpwd = (e) => {
    setPwd(e.target.value);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  const isValid = users.includes('@') && pwd.length >= 5 && users.includes('.');
  console.log(users);
  console.log(isValid);
  return (
    <div className="login">
      <div className="Logopage">
        <img className="Logo1" src={Logo1} alt="Logo1"></img>
        <img className="Logo2" src={Logo2} alt="Logo2"></img>
      </div>
      <div className="input_text">
        <input
          onChange={saveUserid}
          className="email"
          type="text"
          placeholder="이메일"
        ></input>
        <input
          onChange={saveUserpwd}
          className="pw"
          type="password"
          placeholder="비밀번호"
        ></input>
      </div>

      <button
        type="button"
        className={isValid ? 'action' : 'noaction'}
        disabled={!isValid}
        onClick={goToMain}
      >
        로그인
      </button>

      <div className="join2">
        <button className="join" type="button" onClick={goToMain}>
          회원 가입
        </button>
        <hr></hr>
        <button className="password" type="button">
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};
export default Login;
