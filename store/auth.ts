import { atom, selector, useSetRecoilState } from 'recoil';
import { getLocalState } from '@/utils/localStorage';
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
  const cok = getLocalState('_auth');
  if (cok) {
    const setUserAuth = useSetRecoilState(auth);

    useEffect(() => {
      setUserAuth({
        isAuth: true,
        user: JSON.parse(JSON.stringify(cok))
      });
    }, []);
  }
}
