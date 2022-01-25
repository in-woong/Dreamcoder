import React, { useState } from 'react';

const Habits = ({ data, handlePlus, onMinus }) => {
  return (
    <>
      <span>{data.name}</span>
      <span>{data.count}</span>
      <button onClick={handlePlus}>+</button>
      <button onClick={onMinus}>-</button>
    </>
  );
};

export default Habits;
