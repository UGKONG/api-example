import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useForm } from '@modules/hook';

const Login = () => {
  const [state, setState] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const submit = useCallback(e => {
    let data = { task: 'login', id: id, pw: pw };
    
    axios.post('/build/back/server.php', useForm(data)).then(({data}) => {
      setState(JSON.stringify(data));
    });
  }, [id, pw, setState]);

  const idChange = useCallback(e => setId(e.target.value), [setId]);
  const pwChange = useCallback(e => setPw(e.target.value), [setPw]);

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
          <p>결과 : {state}</p>
        </div>
      </form>
    </main>
  )
}

export default Login;