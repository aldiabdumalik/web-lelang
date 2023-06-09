import Cookies from "js-cookie";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonAction from "@/components/ButtonAction";
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { auth } from '@/store/auth';


export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const {isAuth, user} = useRecoilValue(auth);
  
  const handleLogout = () => {
    Cookies.remove('_auth');
    router.reload();
  }

  return (
    <div className='bg-white fixed top-0 z-50 sm:z-auto w-full sm:relative'>
      <div className="flex flex-row justify-between px-4 sm:px-6 py-2 sm:py-5 items-center gap-8 lg:gap-12 border-b shadow-sm">
        <button type="button" className={"block sm:hidden cursor-pointer"} onClick={()=>setOpen(!open)}>
          <Image
            className="w-8 h-8"
            src={open ? '/img/icon/close-x.svg' : '/img/icon/hamburger.svg'}
            width={0}
            height={0}
            alt="infolelang logo"
          />
        </button>
        <Link href={'/home'} className="hidden sm:block">
          <Image
            className="object-cover"
            src='/infolelang.png'
            width={161}
            height={40}
            alt="infolelang logo"
            priority={1}
          />
        </Link>
        <div className="hidden sm:inline-flex flex flex-col flex-1 md:flex-row sm:items-center gap-x-2 lg:gap-x-6 nav-link">
          <Link href={'/schedule'} className={"lg:text-sm text-xs py-3 px-2 " + (router.pathname === '/schedule' ? 'active' : '')}>Jadwal Lelang</Link>
          <Link href={'/procedure'} className={"lg:text-sm text-xs py-3 px-2 " + (router.pathname === '/procedure' ? 'active' : '')}>Prosedur</Link>
          <Link href={'/search/properti'} className={"lg:text-sm text-xs py-3 px-2 " + (router.pathname === '/search/[query]' && router.query.query == 'properti' ? 'active' : '')}>Properti</Link>
          <Link href={'/search/otomotif'} className={"lg:text-sm text-xs py-3 px-2 " + (router.pathname === '/search/[query]' && router.query.query == 'otomotif' ? 'active' : '')}>Otomotif</Link>
          {isAuth && (
            <Link href={'/jual-asset'} className={"lg:text-sm text-xs py-3 px-2 " + (router.pathname === '/jual-asset' ? 'active' : '')}>Jual Asset</Link>
          )}
        </div>
        {!isAuth && <ButtonAction
            label={"Daftar / Login"}
            style={"text-sm py-2.5 px-4 border border-primary font-semibold text-primary rounded-md cursor-pointer"}
            callback={() => console.log('cb')}
          />
        }
        {isAuth && <div className="flex items-center gap-5">
          <div className="flex gap-3">
            <Image src={'/icons/bell.svg'} width={20} height={20} alt="" priority />
            <span className="text-sm">Chat</span>
          </div>
          <div className="h-7 border"></div>
          <div className="flex items-center gap-3 dropdown dropdown-end cursor-pointer" tabIndex={0}>
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <span className="font-semibold text-white text-xs">JW</span>
            </div>
            <div className="">
              <span className="text-sm">{user.fullname}</span>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                <li onClick={() => router.push('/profile')}>
                  <span>Profile</span>
                </li>
                <li onClick={handleLogout}>
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>}
      </div>
      <div className={open ? 'block shadown-sm border-b ' : 'hidden'}>
        <div className="flex flex-col gap-y-4 items-start p-6 w-full nav-link">
          <Link href={'/home'} className="flex w-full items-center justify-center">
            <Image
              className="object-cover"
              src='/infolelang.png'
              width={161}
              height={40}
              alt="infolelang logo"
              priority={1}
            />
          </Link>
          <Link href={'/schedule'} className={"text-sm w-full py-3 px-2 " + (router.pathname === '/schedule' ? 'active' : '')}>Jadwal Lelang</Link>
          <Link href={'/procedure'} className={"text-sm w-full py-3 px-2 " + (router.pathname === '/procedure' ? 'active' : '')}>Prosedur</Link>
          <Link href={'/search/properti'} className={"text-sm w-full py-3 px-2 " + (router.pathname === '/search/[query]' && router.query.query == 'properti' ? 'active' : '')}>Properti</Link>
          <Link href={'/search/otomotif'} className={"text-sm w-full py-3 px-2 " + (router.pathname === '/search/[query]' && router.query.query == 'otomotif' ? 'active' : '')}>Otomotif</Link>
          {isAuth && (
            <Link href={'/jual-asset'} className={"text-sm w-full py-3 px-2 " + (router.pathname === '/jual-asset' ? 'active' : '')}>Jual Asset</Link>
          )}
        </div>
      </div>
    </div>
  )
}