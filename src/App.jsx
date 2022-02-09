import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main.jsx';
import Login from '@pages/Login.jsx';
import Dev from '@pages/Dev.jsx';

const App = () => {
  return (
    <Routes>
      <Route path={ '/' } element={ <Main /> } exact />
      <Route path={ '/login' } element={ <Login /> } exact />
      <Route path={ '/dev' } element={ <Dev /> } exact />
    </Routes>
  )
}

export default App;