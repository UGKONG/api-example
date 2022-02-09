import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [val, setVal] = useState('');
  const number = useSelector(state => state.number);
  const name = useSelector(state => state.name);
  
  useEffect(() => {
    console.log({ name, number });
  }, [number, name]);
  
  const plus = useCallback(e => dispatch({ type: 'setNumber', payload: number + 1 }), [number]);
  const minus = useCallback(e => dispatch({ type: 'setNumber', payload: number - 1 }), [number]);
  const valChange = useCallback(e => setVal(e.target.value), [setVal]);
  const nameSave = useCallback(e => dispatch({ type: 'setName', payload: val }), [val]);

  return (
    <main>
      <h1>TEST 페이지</h1>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <p>number: {number} / name: {name}</p>
      <input type="text" onChange={valChange} />
      <button onClick={nameSave}>저장</button>
    </main>
  )
}

export default Login;