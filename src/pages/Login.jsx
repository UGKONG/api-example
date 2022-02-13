import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from '@modules/hook';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const submit = e => {
    let data = { task: 'login', id: id, pw: pw };
    
    axios.post('/build/back/server.php', useForm(data)).then(({data}) => {
      if (!data.result) {
        setState(data.reason);
        return;
      }
      dispatch({ type: 'setIsLogin', payload: true });
      dispatch({ type: 'setLoginInfo', payload: data.data });
      navigate('/');
    });
  }
  const idChange = e => setId(e.target.value);
  const pwChange = e => {
    setPw(e.target.value);
    e.keyCode == 13 && submit();
  }

  return (
    <main>
      <h1>Login 페이지</h1>
      <form method="POST">
        <div>
          <label htmlFor="id">ID :</label>
          <input type="text" id="id" autoComplete="off" onChange={idChange} />
        </div>
        <div>
          <label htmlFor="pw">PW :</label>
          <input type="password" id="pw" autoComplete="off" onChange={pwChange} />
        </div>
        <div>
          <button type="button" onClick={submit}>로그인</button>
          {state && <p>결과 : {state}</p>}
        </div>
      </form>
    </main>
  )
}

export default Login;