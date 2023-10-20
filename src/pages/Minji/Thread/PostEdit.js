import React, { useState } from 'react';
import './PostEdit.scss';
import userimg from '../../image/userpic.png';
import { useNavigate } from 'react-router-dom';

const PostEdit = () => {
  const navigate = useNavigate();
  const goToThread = () => {
    navigate('/minji-thread');
  };
  const [edit, setEdit] = useState('');
  const saveEdit = (e) => {
    setEdit(e.target.value);
  };
  const token = localStorage.getItem('TOKEN');
  //fetch함수 put delete 써줘야함
  const dateEdit = () =>
    fetch('Api주소', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        key값: edit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.getItem('TOKEN');
        if (data.message === 'CONTENT_NOT_FOUND') {
          alert('본인이 남긴 쓰레드만 수정 가능합니다.');
          navigate('/minji-thread');
        } else {
          navigate('/minji-thread');
        }
      });
  /*fetch('http://10.58.52.215:8000/users/signup',{
    method : 'DELETE',
  })
  .then((response)=>response.json())
  ;*/
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
              onChange={saveEdit}
              className="edit"
              placeholder="내용 수정하기"
            />
          </div>
        </div>
        <div className="posttext">
          <button className="cancel" onClick={goToThread}>
            취소
          </button>
          <button onClick={dateEdit}>게시</button>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
