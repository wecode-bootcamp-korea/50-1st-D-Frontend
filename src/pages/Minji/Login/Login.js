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
    navigate('/minji-main');
  };
  const goToJoin = () => {
    navigate('/minji-join');
  };

  const isValid = users.includes('@') && pwd.length >= 5 && users.includes('.');

  //body 안에 key값의 useState value값이 객체일때만 스테이트.객체내의 키값
  const signinn = () =>
    fetch('http://10.58.52.238:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: users,
        password: pwd,
      }),
    })
      //객체안에 'token'키값, 벨류 리스폰스안에 있는 객체의 벨류를 알아야함.
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'LOG_IN_SUCCESS') {
          localStorage.setItem('TOKEN', data.token);
          navigate('/minji-thread');
        } else if (data.message === '존재하지 않는 이메일입니다.') {
          alert('존재하지 않는 이메일입니다');
          navigate('/minji-main');
        }
      });
  return (
    <div className="login">
      <div className="Logopage">
        <img className="Logo1" src={Logo1} alt="Logo1"></img>
        <img className="Logo2" src={Logo2} alt="Logo2"></img>
      </div>
      <div className="container">
        <input
          onChange={saveUserid}
          className="email"
          type="text"
          placeholder="이메일"
        />
        <input
          onChange={saveUserpwd}
          className="pw"
          type="password"
          placeholder="비밀번호"
        />

        <button
          type="button"
          className={isValid ? 'action' : 'noaction'}
          disabled={!isValid}
          onClick={signinn}
        >
          로그인
        </button>

        <div className="loginoption">
          <button className="join" type="button" onClick={goToMain}>
            회원 가입
          </button>
          <hr></hr>
          <button className="password" type="button">
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
