import React, { useEffect, useState } from 'react';
import './Thread.scss';
import { useNavigate } from 'react-router-dom';

const Thread = () => {
  const [postlist, setPostList] = useState([]);
  const navigate = useNavigate();
  const goToAdd = () => {
    navigate('/minji-postadd');
  };
  const goToEdit = () => {
    navigate('/minji-postedit');
  };
  //fetch함수의 기본값은 GET으로 되어있어서 생략가능
  useEffect(() => {
    fetch('http://10.58.52.238:8000/thread')
      .then((res) => res.json())
      .then((result) => setPostList(result.postData));
  }, []);
  //.then((result))이건 내가 임의로 적은 매개변수지만 => setPostList(result.이건데이터전체의키값을 적어야함)); 이거때문에 에러났음
  //     method: 'GET', (get은 보내준 데이터를 useState를 활용하여 저장한다.)

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
                  {/* {<span>{post.commentCount}</span>} */}
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
