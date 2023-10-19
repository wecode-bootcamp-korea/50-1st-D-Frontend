import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostDetail.scss';

const PostDetail = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Hwangsoohyeon.Main');
  };

  return (
    <div className="post">
      <div className="Back">
        <div className="Backicon">
          <img
            className="BackArrow"
            src="./images/Back_arrow.png"
            alt="Back_arrow"
            onClick={goToMain}
          />
        </div>
        <header>뒤로</header>
      </div>

      <div className="postDetail">
        <div className="userInfo">
          <div className="userInfo1">
            <img src="./images/pic.png" alt="pic" />
            <div className="userName">Name</div>
          </div>
          <div className="writeDate">00.00.00</div>
        </div>
        <div className="postBody">
          일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 들리는
          사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
          믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
          ELIZA의 이름을 따서 명명되었다.
        </div>
        <div className="review">댓글 00</div>
      </div>

      <div className="userReviewList">
        <div className="userReview">
          <div className="userImg">
            <img className="profile" src="./images/pic.png" alt="pic" />
          </div>
          <div className="userReviewInfo">
            <div className="userReviewInfo1">
              <div className="userName">Username</div>
              <div className="writeDate">00.00.00</div>
            </div>
            <div className="coment">
              <div clsssName="comentBody">답글 내용</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
