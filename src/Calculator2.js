import React, { useState } from 'react';

const Calculator2 = () => {
  // 숫자와 결과를 저장하기 위한 상태 선언
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  // 사칙연산 함수 선언
  const add = () => setResult(num1 + num2);
  const subtract = () => setResult(num1 - num2);
  const multiply = () => setResult(num1 * num2);
  const divide = () => setResult(num1 / num2);

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <p>결과: {result}</p>
    </div>
  );
};

export default Calculator2;
