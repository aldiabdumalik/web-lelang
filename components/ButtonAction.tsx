import { useState } from "react";
import Image from "next/image";
import RegistForm from "@/components/Form/RegistForm"
import { useRecoilState, useRecoilValue } from 'recoil';
import { auth } from '@/store/auth';
import { toast } from 'react-toastify';
import { setLocalState } from "@/utils/localStorage";

interface ActionProps {
  label: string;
  style: string;
  callback: Function | any;
}

export default function ButtonAction({label, style, callback}: ActionProps) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState('login')
  const { isAuth, user } = useRecoilValue(auth);
  const [users, setUsers] = useRecoilState(auth);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const mustLogin = () => {
    if (isAuth) return callback()
    return setOpen(true)
  }

  const notify = () => toast("Wow so easy !");

  const LoginSubmit = () => {
    setUsers({
      isAuth: true,
      user: JSON.parse(JSON.stringify({
        id: 1,
        username: 'johnwick3',
        phone: '+62 82150002133',
        fullname: 'John Wick',
        email: 'johnwick3@gmail.com',
        level: 'penjual',
      }))
    });
    setLocalState('_auth', {
      id: 1,
      username: 'johnwick3',
      phone: '+62 82150002133',
      fullname: 'John Wick',
      email: 'johnwick3@gmail.com',
      level: 'penjual',
    });
  }

  const handleOnchange = (text:any, input:any) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };


  const toggleHandler = () => {}
  const elementHandler = () => {

    if (form == 'login') setForm('regist');
    if (form == 'regist') setForm('login');
  }

  return (
    <>
      <label onClick={mustLogin} className={style}>{label}</label>
      {!isAuth && <>
        <input type="checkbox" className="modal-toggle" checked={open} onChange={toggleHandler} />
        <div className="modal">
          <div className="modal-box p-0 py-2 rounded-lg relative">
            <div className="border-b pb-3 pt-4 px-6 flex items-center justify-between">
              <span className="text-primary font-bold">{form == 'login' ? 'Masuk': 'Daftar'}</span>
              <label
                onClick={() => {setOpen(false); setForm('login')}}
                className="w-6 h-6 border-2 border-gray-400 flex justify-center items-center rounded-full text-gray-400 cursor-pointer"
              >
                ✕
              </label>
            </div>
            <div className="pb-7">

              <div className={"container mx-auto pt-6 " + (form == 'login' ? 'block': 'hidden')}>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Email</span>
                  <input type="text" className="w-full py-2.5 border rounded-md px-3.5" placeholder="your@mail.com" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <span className="text-sm font-semibold">Password</span>
                  <input type="password" className="w-full py-2.5 border rounded-md px-3.5" placeholder="Password" />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="form-control">
                    <label className="label p-0 cursor-pointer flex items-center gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span className="label-text text-sm">Ingat Saya</span> 
                    </label>
                  </div>
                  <span className="text-sm text-secondary cursor-pointer">Lupa Kata Sandi?</span>
                </div>
                <div className="mt-7">
                  <button className="w-full bg-primary font-semibold text-white rounded-md py-3" onClick={LoginSubmit}>Masuk</button>
                </div>
                <div className="divider">
                  <span className="text-sm">atau masuk dengan</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center justify-center rounded-md gap-4 py-3 bg-gray-200 w-full">
                    <Image src={'/icons/facebook.svg'} width={24} height={24} alt="" priority />
                    <span>Facebook</span>
                  </button>
                  <button className="flex items-center justify-center rounded-md gap-4 py-3 bg-gray-200 w-full">
                    <Image src={'/icons/google.svg'} width={24} height={24} alt="" priority />
                    <span>Google</span>
                  </button>
                </div>
                {/* <div className="text-sm text-center mt-6">
                  Belum punya akun?
                  <span className="ml-1 cursor-pointer font-semibold text-secondary" onClick={() => setForm('regist')}>Daftar</span>
                </div> */}
              </div>

              {/* RegistForm */}
              
              <RegistForm style={form == 'login' ? 'hidden': 'block'} />
              
              <div className="text-sm text-center mt-6">
                {(form === "login" ? "Belum punya akun?" : "Sudah punya akun?")}
                <span className="ml-1 cursor-pointer font-semibold text-secondary" onClick={elementHandler}>{(form === "login" ? "Daftar" : "Masuk")}</span>
              </div>
            </div>

          </div>
        </div>
      </>}
    </>
  )
}