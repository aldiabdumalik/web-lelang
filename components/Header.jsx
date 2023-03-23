import React from 'react'
import Image from "next/image";
import { Tabbar } from "@/components/Home/"

function Header() {
  return (
    <>
        <div className="flex flex-1 justify-center items-end bg-top-4 px-20 pb-4 h-451px sm:h-720px bg-banner bg-no-repeat bg-cover sm:bg-center relative">
            <div className="absolute top-10 sm:px-96 sm:top-32">
                <h1 className="text-2xl text-center sm:text-6xl font-bold text-white">
                Temukan Rumah dan Kendaraan Impianmu
                </h1>
            </div>
            <div className="hidden sm:block flex flex-col bg-black h-36 px-3 pt-3.5 w-full rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-50">
                <Tabbar />
            </div>
        </div>
    </>
  )
}

export default Header