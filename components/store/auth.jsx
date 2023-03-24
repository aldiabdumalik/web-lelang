import { atom, selector } from 'recoil';

const auth = atom({
    key: 'auth-user-' + new Date().toString(),
    default: {
      isAuth: true,
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
  
  export { auth };
  