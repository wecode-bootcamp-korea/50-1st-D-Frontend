import React, { useState } from 'react';
import './PostAdd.scss';
import userimg from '../../image/userpic.png';
import { useNavigate } from 'react-router-dom';
//게시 누르면 thread로 정보가 가게 post하기

const PostAdd = () => {
  const navigate = useNavigate();
  const goToThread = () => {
    navigate('/minji-thread');
  };
  const [addpost, setAddPost] = useState('');
  const savepost = (e) => {
    setAddPost(e.target.value);
  };

  const token = localStorage.getItem('TOKEN');
  const created = () =>
    fetch('http://10.58.52.238:8000/thread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        //토큰가지고온거넣고
        token: token,
        //컨트롤아이버튼:도구찾기
      },
      body: JSON.stringify({
        content: addpost,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // localStorage.getItem('TOKEN');
        if (data.message === 'NEW_THREAD_CREATED') {
          navigate('/minji-thread');
          // } else if (data.message === 'CONTENT_TOO_SHORT') {
          //   alert('한 글자 이상이어야 합니다.');
        } else alert('로그인 하지 않은 사용자는 쓰레드를 남길 수 없습니다.');
        // navigate('/');
      });
  //로그인하지 않을때 로그인 페이지로 갈 수 있게 기능 구현(21일날 실험해보기)
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
            <textarea
              onChange={savepost}
              placeholder="스레드를 시작하세요."
            ></textarea>
          </div>
        </div>
        <div className="posttext">
          <button className="cancel" onClick={goToThread}>
            취소
          </button>
          <button onClick={created}>게시</button>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
