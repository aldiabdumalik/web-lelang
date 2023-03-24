import { atom, selector } from 'recoil';

const auth = atom({
  key: 'auth-user-' + new Date(),
  default: {
    isAuth: false,
    user: {
      id: 1,
      username: 'johnwick3',
      phone: '+62 82150002133',
      fullname: 'John Wick',
      email: 'johnwick3@gmail.com',
      level: 'penjual',
    },
  },
});

const authState = selector({
  key: 'auth-state-' + new Date(),
  get: ({get}) => {
    const user = get(auth);
    return user;
  }
});

export {auth, authState};
  