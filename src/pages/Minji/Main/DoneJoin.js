import React from 'react';
import './DoneJoin.scss';
import { useNavigate } from 'react-router-dom';
import JoinLogo from '../../image/join로고.png';
import BackArrow from '../../image/Back_arrow.png';
const DoneJoin = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  const goToMain = () => {
    navigate('/minji-join');
  };
  return (
    <div className="joinDone">
      <div className="header">
        <img onClick={goToMain} src={BackArrow} alt="backarrow" />
        <span onClick={goToMain}>뒤로</span>
      </div>
      <div className="container">
        <img className="joinLogo" src={JoinLogo} alt="joinlogo"></img>
        <div className="joinBox">
          <h1>회원 가입되었습니다!</h1>
          <span>이제 로그인해주세요.</span>
        </div>
      </div>
      <div className="joinOk">
        <button onClick={goToLogin} className="doneJoinBtn">
          확인
        </button>
      </div>
    </div>
  );
};

export default DoneJoin;
