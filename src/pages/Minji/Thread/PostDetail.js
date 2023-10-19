import React from 'react';
import './PostDetail.scss';
import { useNavigate } from 'react-router-dom';
import Backarrow from '../../image/Back_arrow.png';
const PostDetail = () => {
  const navigate = useNavigate();
  const goToThread = () => {
    navigate('/minji-thread');
  };
  return (
    <div className="postdetail">
      <div className="container"></div>
      <div className="replyheader">
        <div className="backtothread">
          <img className="arrow" src={Backarrow} alt="back"></img>
          <span onClick={goToThread}>뒤로</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
