import React, { useState } from 'react';

const Calculator = () => { // 초기값 설정
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    let res = 0;
    switch (operation) {
      case '+': //덧셈
        res = Number(num1) + Number(num2);
        break;
      case '-': //뺄셈
        res = Number(num1) - Number(num2);
        break;
      case '*': //곱셈
        res = Number(num1) * Number(num2);
        break;
      case '/': //나눗셈
        res = Number(num1) / Number(num2);
        break;
      default:
        break;
    }
    setResult(`${num1} ${operation} ${num2} = ${res}`); //계산 결과를 표시, 업데이트하여 보여줌
  };

  return ( //input 으로 값을 받고 num1,num2의 수를 넣고 변경될 때마다 상태 업데이트
    <div> 
      <h1>계산기</h1>
      <h2>컴퓨터교육과 201927016 정송헌</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <p> 
      <button onClick={() => handleCalculate('+')}>+</button>
      <button onClick={() => handleCalculate('-')}>-</button>
      <button onClick={() => handleCalculate('*')}>*</button>
      <button onClick={() => handleCalculate('/')}>/</button>
      </p>
      <p>{result}</p>
    </div>
  );
};

export default Calculator;
