import { useState } from "react";
import Image from "next/image";

interface PurchaseTypeProps {
  toggle: boolean;
  onClose: Function;
}

export default function PurchaseType({toggle, onClose}: PurchaseTypeProps) {
  const [open, setOpen] = useState(toggle)

  const toggleHandler = () => {}

  const closeHandler = () => {
    onClose(false)
    setOpen(false);
  }

  return (
    <>
      <input type="checkbox" className="modal-toggle" checked={open} onChange={toggleHandler} />
      <div className="modal">
        <div className="modal-box p-0 rounded-lg relative">
          <div className="border-b pb-3 pt-4 px-6 flex items-center justify-between">
            <span className="text-primary font-bold">Ajukan Pembelian</span>
            <label
              onClick={closeHandler}
              className="w-6 h-6 border-2 border-gray-400 flex justify-center items-center rounded-full text-gray-400 cursor-pointer"
            >
              ✕
            </label>
          </div>
          <div className="container mx-auto pt-6 pb-7">
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
              <button className="w-full bg-primary font-semibold text-white rounded-md py-3">Masuk</button>
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
            <div className="text-sm text-center mt-6">
              Belum punya akun?
              <span className="ml-1 cursor-pointer font-semibold text-secondary">Daftar</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}