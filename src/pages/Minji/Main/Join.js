import React, { useState } from 'react';
import './Join.scss';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../image/Back_arrow.png';

const Join = () => {
  //email,password정보 저장
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpwd, setCheckPwd] = useState('');
  const [nickname, setNickName] = useState('');
  const savenickname = (event) => {
    setNickName(event.target.value);
  };
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
  const [files, setFiles] = useState('');

  const savefile = (e) => {
    setFiles(e.target.files);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!!selectedFile) {
      setFiles(selectedFile.name);
    }
  };
  const signupp = () =>
    fetch('http://10.58.52.215:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
        //객체의 key와 value같으면 email,이렇게해도됨
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        /*if (password.length < 10) {
          alert('비밀번호는 10자리 이상이어야합니다.');
        }*/ if (data.message === 'SIGNUP SUCCESS') {
          alert('회원가입 성공');
          navigate('/minji-donejoin');
        } else alert('회원가입 실패');
      });

  //필수데이터 pwd 10글자이상,email'@'','포함 & pwd확인도 일치한지 확인
  const requiredData =
    password.length >= 10 &&
    email.includes('@') &&
    email.includes('.') &&
    password === checkpwd;

  const navigate = useNavigate();
  const goToBack = () => {
    navigate('/');
  };

  return (
    <div className="main">
      <div className="header">
        <img onClick={goToBack} src={BackArrow} alt="backarrow" />
        <span onClick={goToBack}>뒤로</span>
      </div>
      <p>회원가입</p>
      <div className="basic mixinfo">
        <div className="information">기본 정보</div>
        <div className="required">필수 사항</div>
      </div>
      <div className="input_main">
        <input
          value={email}
          onChange={saveemail}
          type="text"
          placeholder="이메일"
        />
        <input
          value={password}
          onChange={savepassword}
          type="text"
          placeholder="비밀번호"
        ></input>
        <input type="text" placeholder="비밀번호 확인" />
      </div>
      <div className="profileimage mixinfo">
        <span className="profileimg">닉네임과 프로필 이미지</span>
        <span className="choose">선택 사항</span>
      </div>

      <input
        onChange={savenickname}
        className="maininput"
        type="text"
        placeholder="닉네임"
      />

      <div className="filebox">
        <label htmlFor="file">파일 선택</label>
        <input type="file" id="file" onChange={handleFileChange} />
        <div className="filename"> {files ? files : '파일을 선택해주세요'}</div>
      </div>

      <div className="telnum mixinfo">
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
      <div className="hbd mixinfo">
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
      <button className="signup" type="button" onClick={signupp}>
        회원 가입
      </button>
    </div>
  );
};

export default Join;
