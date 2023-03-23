import Image from 'next/image'
import React from 'react'

export default function Regist({style}) {
  return (
    <div className={"container mx-auto pt-6 pb-7 flex flex-col gap-y-4 " + style}>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Nama Lengkap</span>
        <input type="text" className="w-full py-2.5 border rounded-md px-3.5" placeholder="Nama Lengkap" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Email</span>
        <input type="text" className="w-full py-2.5 border rounded-md px-3.5" placeholder="your@mail.com" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">No Handphone</span>
        <input type="text" className="w-full py-2.5 border rounded-md px-3.5" placeholder="No Hanphone" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Password</span>
        <input type="password" className="w-full py-2.5 border rounded-md px-3.5" placeholder="Password" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Konfirmasi Password</span>
        <input type="password" className="w-full py-2.5 border rounded-md px-3.5" placeholder="Konfirmasi Password" />
      </div>
      <div className="flex items-center justify-between">
        <div className="form-control">
          <label className="label p-0 cursor-pointer flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text text-sm">Dengan ini saya menyetujui syarat dan ketentuan yang berlaku</span> 
          </label>
        </div>
        {/* <span className="text-sm text-secondary cursor-pointer">Lupa Kata Sandi?</span> */}
      </div>
      <div className="mt-7">
        <button className="w-full bg-primary font-semibold text-white rounded-md py-3">Daftar Sekarang</button>
      </div>
    </div>
  )
}