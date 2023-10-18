import React from 'react';
import './JoinOk.scss';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  const goToJoin = () => {
    navigate('/Join');
  };

  const goToLogin = () => {
    navigate('/Login');
  };

  return (
    <div>
      <div className="Back">
        <div className="Backicon">
          <img
            className="BackArrow"
            src="./images/Back_arrow.png"
            alt="Back_arrow"
            onClick={goToJoin}
          />
        </div>
        <header>뒤로</header>
      </div>
      <div className="JoinOk">
        <img
          className="banner_square"
          src="./images/banner-square.png"
          alt="배너이미지"
        />
        <div className="joinResult">
          <h1>회원 가입되었습니다!</h1>
          <h2>이제 로그인해주세요.</h2>
        </div>
      </div>
      <button className="JoinOkBtn" onClick={goToLogin}>
        확인
      </button>
    </div>
  );
};

export default Join;
