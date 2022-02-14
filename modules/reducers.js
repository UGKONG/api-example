const isLogin = (state = false, { type, payload }) => {
  switch (type) {
    case 'setIsLogin':
      return state = payload ?? state;
    default:
      return state;
  }
}

const loginInfo = (state = null, { type, payload }) => {
  switch (type) {
    case 'setLoginInfo':
      return state = payload ?? state;
    default:
      return state;
  }
}

const states = {
  isLogin,
  loginInfo,
}

export default states;