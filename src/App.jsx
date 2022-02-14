import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main.jsx';
import Login from '@pages/Login.jsx';
import Dev from '@pages/Dev.jsx';
import NotFound from '@pages/NotFound.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '@modules/hook';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.isLogin);

  const loginChk = () => {
    let data = { task: 'isSession' };
    axios.post('/build/back/server.php', useForm(data))
      .then(({data}) => {
        if (!data.data || data.data.length == 0) return navigate('/login');
        dispatch({ type: 'setLoginInfo', payload: data.data });
      });
  }
  
  useEffect(() => {
    loginChk();
  }, [isLogin, location.pathname]);

  return (
    <Routes>
      <Route path={ '/' } element={ <Main /> } exact />
      <Route path={ '/login' } element={ <Login /> } exact />
      <Route path={ '/dev' } element={ <Dev /> } exact />
      <Route path={ '*' } element={ <NotFound /> } exact />
    </Routes>
  )
}

export default App;