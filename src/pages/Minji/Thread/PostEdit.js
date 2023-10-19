import React from 'react';
import './PostEdit.scss';
import userimg from '../../image/userpic.png';
import { useNavigate } from 'react-router-dom';

const PostEdit = () => {
  const navigate = useNavigate();
  const goToThread = () => {
    navigate('/minji-thread');
  };

  return (
    <div className="post_Add">
      <div className="container">
        <div className="publish">
          <div>
            <span>
              <img className="yourface" src={userimg} alt="face"></img>
            </span>
          </div>
          <div className="content">
            <span className="yourname">Name</span>
            <textarea className="edit">내용 수정하기</textarea>
          </div>
        </div>
        <div className="posttext">
          <button className="cancel" onClick={goToThread}>
            취소
          </button>
          <button>게시</button>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
