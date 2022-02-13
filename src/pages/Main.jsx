import React from 'react';
import axios from 'axios';
import { useForm } from '@modules/hook';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [SN, setSN] = useSelector(state => state.loginInfo?.SN);
  const [NM, setNM] = useSelector(state => state.loginInfo?.NM);

  const logout = () => {
    let data = { task: 'logout' };
    axios.post('/build/back/server.php', useForm(data))
      .then(({data}) => {
        if (!data?.result) {
          return console.warn('ERROR');
        }
        //setSN(data?.SN);
        //setNM(data?.NM);
        navigate('/login');
      })
  }
  return (
    <main>
      <h1>메인 페이지</h1>
      <p>로그인 정보: SN={SN} / NM={NM}</p>
      <button onClick={logout}>로그아웃</button>
    </main>
  )
}

export default Main;