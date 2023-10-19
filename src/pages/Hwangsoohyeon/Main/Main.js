import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [inputPostList, setInputPostList] = useState([]);

  const goToPostDetail = () => {
    navigate('/Hwangsoohyeon.PostDetail');
  };

  const goToPostAdd = () => {
    navigate('/Hwangsoohyeon.PostAdd');
  };

  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://10.58.52.70:8000/thread', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => setInputPostList(result.data));
  }, []);

  return (
    <div className="Main">
      <div className="postList">
        {inputPostList &&
          inputPostList.map((data) => (
            <div key={data.id} className="post">
              <div className="userInfo">
                <div className="userInfo1">
                  <img className="profile" src={data.profileImage} alt="pic" />
                  <div className="userName">{data.nickname}</div>
                </div>
                <div className="writeDate">{data.createdAt}</div>
              </div>
              <div className="postBody" onClick={goToPostDetail}>
                {data.content}
              </div>
              <div className="review">댓글{data.num}</div>
            </div>
          ))}
      </div>

      <div className="postUpload">
        <button className="postBtn" onClick={goToPostAdd}>
          글 쓰기
        </button>
      </div>
    </div>
  );
};

export default Main;

// const MOK = [
//   {
//     id: 1,
//     nickname: '황수현',
//     date: '2023',
//     img: '이미지',
//     content: 'asdfasfasdfasfasdfasdfasdfadf',
//     num: 3,
//   },
//   {
//     id: 2,
//     nickname: '황수현',
//     date: '2023',
//     img: '이미지',
//     content: 'asdfasfasdfasfasdfasdfasdfadf',
//     num: 3,
//   },
//   {
//     id: 3,
//     nickname: '황수현',
//     date: '2023',
//     img: '이미지',
//     content: 'asdfasfasdfasfasdfasdfasdfadf',
//     num: 3,
//   },
//   {
//     id: 4,
//     nickname: '황수현',
//     date: '2023',
//     img: '이미지',
//     content: 'asdfasfasdfasfasdfasdfasdfadf',
//     num: 3,
//   },
//   {
//     id: 5,
//     nickname: '황수현',
//     date: '202df3',
//     img: '이미지',
//     content: 'asdfasfasdfasfasdfasdfasdfadf',
//     num: 3,
//   },
// ];
