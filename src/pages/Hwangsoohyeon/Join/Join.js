import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.scss';

const Join = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [reInputPw, setReInputPW] = useState('');

  const goToLogin = () => {
    navigate('/Login');
  };

  const goToJoinOk = () => {
    // navigate('/Login');
    fetch('http://localhost:8000/insertUserInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then((res) => res.json())
      .then((data) => navigate('/Login'));
  };

  const able = inputId.indexOf('@') !== -1 && inputPw.length >= 10;

  return (
    <div>
      <div className="Back">
        <div className="Backicon">
          <img
            className="BackArrow"
            src="./images/Back_arrow.png"
            alt="Back_arrow"
            onClick={goToLogin}
          />
        </div>
        <header>뒤로</header>
      </div>
      <div className="Join1">
        <div className="info">
          <h1>회원가입</h1>

          <div className="info1">
            <div className="info_label">
              <h2>기본정보</h2>
              <label>필수사항</label>
            </div>
            <input
              type="text"
              placeholder="이메일"
              onChange={(e) => setInputId(e.target.value)}
              value={inputId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setInputPw(e.target.value)}
              value={inputPw}
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e) => setReInputPW(e.target.value)}
              value={reInputPw}
            />
          </div>

          <div className="info2">
            <div className="info_label">
              <h2>닉네임과 프로필이미지</h2>
              <label>선택 사항</label>
            </div>
            <input type="text" placeholder="닉네임" />
            <input type="file" />
          </div>

          <div className="info3">
            <div className="info_label">
              <h2>전화번호</h2>
              <label>선택 사항</label>
            </div>
            <div className="phone">
              <select name="phone_number" className="phoneNumber">
                <option value="010" selected="selected">
                  010
                </option>
                <option value="011">011</option>
                <option value="070">070</option>
              </select>
              <input type="tel" placeholder="휴대폰번호를 입력해주세요." />
            </div>
          </div>

          <div className="info4">
            <div className="info_label">
              <h2>생일</h2>
              <label>선택 사항</label>
            </div>
            <div className="birth">
              <select name="birth_year" className="birthYear">
                <option value="">년도</option>
                <option value="1988년" selected="selected">
                  1988년
                </option>
                <option value="1989년">1989년</option>
                <option value="1990년">1990년</option>
              </select>
              <select name="birth_month" className="birthMonth">
                <option value="">월</option>
                <option value="1월" selected="selected">
                  1월
                </option>
                <option value="2월">2월</option>
                <option value="3월">3월</option>
              </select>
              <select name="birth_day" className="birthDay">
                <option value="">일</option>
                <option value="1일" selected="selected">
                  1일
                </option>
                <option value="2일">2일</option>
                <option value="3일">3일</option>
              </select>
            </div>
          </div>

          <button disabled={!able} className="JoinBtn" onClick={goToJoinOk}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
