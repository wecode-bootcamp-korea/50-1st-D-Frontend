import React from 'react';
import './Join.scss';
import { useNavigate } from 'react-router-dom';
import JoinLogo from '../../image/join로고.png';

const Join = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/minji.main');
  };
  return (
    <div className="joindone">
      <div className="back">
        <span onClick={goToMain}>뒤로</span>
      </div>
      <div className="join3">
        <img className="joinlogo" src={JoinLogo} alt="mmmm"></img>
        <div className="joinbox">
          <h1>회원 가입되었습니다!</h1>
          <span>이제 로그인해주세요.</span>
        </div>
      </div>
    </div>
  );
};

export default Join;
