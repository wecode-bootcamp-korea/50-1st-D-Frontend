import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostAdd.scss';

const PostAdd = () => {
  const navigate = useNavigate();
  const [inputPost, setInputPost] = useState('');

  const goToMain = () => {
    // navigate('/Hwangsoohyeon.Main');
    const token = localStorage.getItem('token');
    fetch('http://10.58.52.70:8000/thread/createThread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        content: inputPost,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'NEW_THREAD_CREATED') {
          localStorage.setItem('token', res.token);
          navigate('/Hwangsoohyeon.Main');
        } else {
          alert('로그인 후, 작성가능합니다!');
          navigate('/Hwangsoohyeon.join');
        }
      });
  };
  return (
    <div className="postAdd">
      <div className="publish">
        <div className="profile">
          <img className="userImg" src="./images/pic.png" alt="pic" />
        </div>
        <div className="content">
          <div className="userName">Name</div>
          <div className="contentBody">
            <textarea
              className="text"
              placeholder="스레드를 시작하세요"
              onChange={(e) => setInputPost(e.target.value)}
              value={inputPost}
            />
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="deleteBtn" onClick={goToMain}>
          취소
        </button>
        <button className="okBtn" onClick={goToMain}>
          게시
        </button>
      </div>
    </div>
  );
};

export default PostAdd;
