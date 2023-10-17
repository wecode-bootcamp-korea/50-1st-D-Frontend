import React, { useState } from 'react';
import './Main.scss';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  //email,password정보 저장
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpwd, setCheckPwd] = useState('');
  const saveemail = (event) => {
    setEmail(event.target.value);
  };
  const savepassword = (event) => {
    setPassword(event.target.value);
  };

  const checkpassword = (event) => {
    setCheckPwd(event.target.value);
  };
  //file upload 시 files속성에 저장
  const [file, setFile] = useState('');

  const savefile = (e) => {
    setFile(e.target.files);
  };
  //필수데이터 pwd 10글자이상,email'@'','포함
  const requiredData =
    password.length >= 10 &&
    email.includes('@') &&
    email.includes('.') &&
    password === checkpwd;

  const navigate = useNavigate();
  const goToBack = () => {
    navigate('/');
  };

  console.log(file);
  return (
    <div className="main">
      <button className="back" type="button" onClick={goToBack}>
        &lt; &nbsp;&nbsp;뒤로
      </button>
      <p>회원가입</p>
      <div className="basic">
        <div className="information">기본 정보</div>
        <div className="required">필수 사항</div>
      </div>
      <div className="input_main">
        <input
          value={email}
          onChange={saveemail}
          type="text"
          placeholder="이메일"
        ></input>
        <input
          value={password}
          onChange={savepassword}
          type="text"
          placeholder="비밀번호"
        ></input>
        <input type="text" placeholder="비밀번호 확인"></input>
      </div>
      <div className="profileimage">
        <span className="profileimg">닉네임과 프로필 이미지</span>
        <span className="choose">선택 사항</span>
      </div>

      <input className="maininput" type="text" placeholder="닉네임"></input>
      <input onChange={savefile} className="choosefile" type="file"></input>
      <div className="telnum">
        <span className="phonenum">전화번호</span>
        <span className="choose">선택 사항</span>
      </div>

      <div className="typephone">
        <select className="startnum">
          <option>010</option>
        </select>
        <input
          className="pushnum"
          type="tel"
          placeholder="휴대폰 번호를 입력해주세요"
        ></input>
      </div>
      <div className="hbd">
        <span className="birth">생일</span>
        <span className="choose">선택 사항</span>
      </div>
      <div className="birthyear">
        <select className="year">
          <option>1997년</option>
          <option>1998년</option>
        </select>
        <select className="month">
          <option>1월</option>
          <option>2월</option>
        </select>
        <select className="day">
          <option>1일</option>
          <option>13일</option>
        </select>
      </div>
      <button className="signup" type="button">
        회원 가입
      </button>
    </div>
  );
};

export default Main;
