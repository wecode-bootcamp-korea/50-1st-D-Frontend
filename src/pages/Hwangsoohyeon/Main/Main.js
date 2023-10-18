import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  return (
    <>
      <div className="postMain" />
      <div className="postList" />
      <div className="post">
        <img className="profile" src="./images/pic.png" alt="pic" />
        <div className="userName">Name</div>
        <div className="postBody">
          <div className="postBody1">
            일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 들리는
            사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
            믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
            ELIZA의 이름을 따서 명명되었다.
          </div>
        </div>
        <button className="postUpload">글 쓰기</button>
      </div>
    </>
  );
};

export default Main;
