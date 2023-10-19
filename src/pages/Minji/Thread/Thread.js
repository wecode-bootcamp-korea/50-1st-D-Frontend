import React, { useEffect, useState } from 'react';
import './Thread.scss';
import { useNavigate } from 'react-router-dom';

const Thread = () => {
  const [postlist, setPostList] = useState([]);
  const navigate = useNavigate();
  const goToAdd = () => {
    navigate('/minji-postadd');
  };
  //metod의 기본값은 GET으로 되어있어서 생략가능
  useEffect(() => {
    fetch('http://10.58.52.215:8000/showPosts')
      .then((res) => res.json())
      .then((result) => setPostList(result.message));
  }, []);

  //   fetch('http://10.58.52.59:8000/users/login', {
  //     method: 'GET', (get은 보내준 데이터를 useState를 활용하여 저장한다.)
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //    승윤님 Authorization:localStorage.getItem("token")
  //받은데이터로 모할지 then에입력인데 map이용은 어떻게하나..
  //get데이터는 state로 저장

  return (
    <div className="thread">
      <div className="container">
        <div className="postList">
          {postlist &&
            postlist.map((post) => (
              <div className="post">
                <div className="header">
                  <div>
                    <span>
                      <img
                        className="yourface"
                        src={post.profile_image}
                        alt="face"
                      ></img>
                    </span>
                    <span className="yourname">{post.nickname}</span>
                  </div>
                  <span className="date">{post.created_at}</span>
                </div>

                <div className="tbox">
                  <span>{post.content}</span>
                </div>
                <div className="comments">
                  {<span>{post.commentCount}</span>}
                </div>
              </div>
            ))}
        </div>
        <footer>
          <button onClick={goToAdd} type="button" className="updatebtn">
            글 쓰기
          </button>
        </footer>
      </div>
    </div>
  );
};
export default Thread;
