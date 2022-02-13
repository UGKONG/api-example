const isLogin = (state = false, { type, payload }) => {
  switch (type) {
    case 'setIsLogin':
      return state = payload ?? false;
    default:
      return state;
  }
}

const loginInfo = (state = {}, { type, payload }) => {
  switch (type) {
    case 'setLoginInfo':
      return state = payload ?? {};
    default:
      return state;
  }
}

const number = (state = 0, { type, payload }) => {
  switch (type) {
    case 'setNumber':
      return state = payload ?? 0;
    default:
      return state;
  }
}

const name = (state = '', { type, payload }) => {
  switch (type) {
    case 'setName':
      return state = payload ?? '';
    default:
      return state;
  }
}

const states = {
  isLogin,
  loginInfo,
  number,
  name
}

export default states;