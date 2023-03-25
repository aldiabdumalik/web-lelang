import { atom, selector, useSetRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export const auth = atom({
  key: "Auth",
  default: {
    isAuth: false,
    user: null,
  },
});

export const authState = selector({
  key: "AuthState",
  get: ({get}) => {
    const user = get(auth);
    return user;
  }
});

export function initAuth() {
  const cok = Cookies.get('_auth');
  if (cok) {
    const setUserAuth = useSetRecoilState(auth);

    useEffect(() => {
      setUserAuth({
        isAuth: true,
        user: JSON.parse(cok)
      });
    }, []);
  }
}
