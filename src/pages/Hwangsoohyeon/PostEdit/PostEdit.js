import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostEdit.scss';

const PostEdit = () => {
  const navigate = useNavigate();

  const goToPost = () => {
    navigate('/Post');
  };

  return (
    <div className="postEdit">
      <div className="publish">
        <div className="profile">
          <img className="userImg" src="./images/pic.png" alt="pic" />
        </div>
        <div className="content">
          <div className="userName">Name</div>
          <div className="contentBody">
            <textarea className="text" placeholder="내용 수정하기" />
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="deleteBtn">취소</button>
        <button className="okBtn" onClick={goToPost}>
          게시
        </button>
      </div>
    </div>
  );
};

export default PostEdit;
