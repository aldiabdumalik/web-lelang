import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonAction from "@/components/ButtonAction";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-white'>
      <div className="flex flex-row justify-between px-6 py-5 items-center gap-12 border-b">
        <button type="button" className={"block sm:hidden cursor-pointer"} onClick={()=>setOpen(!open)}>
          <Image
              className="w-8 h-8"
              src={open ? '/img/icon/close-x.svg' : '/img/icon/hamburger.svg'}
              width={0}
              height={0}
              alt="infolelang logo"
            />
        </button>
        <div className="hidden sm:block">
          <Image
            className="object-cover"
            src='/infolelang.png'
            width={161}
            height={40}
            alt="infolelang logo"
            priority={1}
          />
        </div>
        <div className="hidden sm:inline-flex flex flex-col flex-1 md:flex-row gap-6">
          <Link href={'/schedule'} className="text-sm">Jadwal Lelang</Link>
          <Link href={'/'} className="text-sm">Prosedur</Link>
          <Link href={'/'} className="text-sm">Properti</Link>
          <Link href={'/'} className="text-sm">Otomotif</Link>
        </div>
        <ButtonAction
          label={"Daftar / Login"}
          style={"text-sm py-2.5 px-4 border border-primary font-semibold text-primary rounded-md cursor-pointer"}
          callback={() => console.log('cb')}
        />
      </div>
      <div className={open ? 'block ' : 'hidden'}>
        <div className="flex flex-col gap-y-8 items-start p-8 w-full">
            <Link href={'/schedule'} className="text-sm">Jadwal Lelang</Link>
            <Link href={'/'} className="text-sm">Prosedur</Link>
            <Link href={'/'} className="text-sm">Properti</Link>
            <Link href={'/'} className="text-sm">Otomotif</Link>
            <div className="flex w-full items-center justify-center">
              <Image
                className="object-cover"
                src='/infolelang.png'
                width={161}
                height={40}
                alt="infolelang logo"
                priority={1}
              />
            </div>
          </div>
      </div>
    </div>
  )
}