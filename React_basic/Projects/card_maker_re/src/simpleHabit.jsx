import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>{this.state.count}</span>
      <buton className='habit-button habit-increase' onClick={handleIncreament}>
        <i className='fa-plus-square fas'></i>
      </buton>
    </li>
  );
};

export default SimpleHabit;

//함수형은 class 형과 다르게 render가 아니라 지역함수도 계속 해서 rendering 및 비즈니스 로직들이 수행이된다.
//따라서 함수를 새로 설명하지 않고 동일하게 전달하기 위해 useCallback 을 사용할 수 있다
