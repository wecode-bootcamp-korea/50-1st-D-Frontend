import React, { useState } from 'react';
import './Thread.scss';

const Thread = () => {
  return (
    <div className="thread">
      <div className="post">
        <div className="header">
          <div>
            <span>이미지</span>
            <span>Name</span>
          </div>
          <div>00:00:00</div>
        </div>
        <div className="tbox">
          <span>
            일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
            사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
            믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
            ELIZA의 이름을 따서 명명되었다.
          </span>
        </div>
        <div className="comments">
          <span>댓글 00</span>
        </div>
      </div>
    </div>
  );
};
export default Thread;
