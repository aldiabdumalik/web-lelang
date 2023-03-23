import React from 'react'
import Image from "next/image";
import { Tabbar, TabbarMobile } from "@/components/Home/"

function Header() {
  return (
    <>
        <div className="flex flex-1 justify-center items-end bg-top-4 px-20 pb-4 h-500px sm:h-720px bg-banner bg-no-repeat bg-cover sm:bg-center relative">
            <div className="absolute top-10 lg:px-96 sm:top-32">
                <h1 className="text-2xl text-center md:text-6xl font-bold text-white">
                  Temukan Rumah dan Kendaraan Impianmu
                </h1>
            </div>
            <div className="hidden lg:block flex flex-col bg-black h-36 px-3 pt-3.5 w-full rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-50">
                <Tabbar />
            </div>
            <TabbarMobile />
            {/* <div className="sm:hidden">
              <div className="btn-group">
                <button className="btn bg-bluesky text-primary-text border-none active rnd-none text-xs px-3 normal-case">Properti</button>
                <button className="btn bg-bluesky text-primary-text border-none rnd-none text-xs px-3 normal-case">Otomotif</button>
                <button className="btn bg-bluesky text-primary-text border-none rnd-none text-xs px-3 normal-case">Mesin</button>
                <button className="btn bg-bluesky text-primary-text border-none rnd-none text-xs px-3 normal-case">Lainnya</button>
              </div>
              <hr className="border-2 border-primary w-full" />
              <div className="p-4 bg-white flex flex-col gap-y-6">
                <div className="h-14 bg-white rounded-lg flex items-center text-base border relative">
                  <input type="text" placeholder="Cari berdasarkan lokasi, area sekitar, atau nama asset"
                    className="input bg-transparent w-full pl-10" />
                  <Image src={"/img/icon/search-placeholder.svg"} width={0} height={0} className="w-6 h-6 absolute left-2" alt="arrow" />
                </div>
                <hr/>
                <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                  <div className="h-11 w-28 border rounded-md flex justify-center items-center text-base">
                    <div className="dropdown w-full relative">
                      <input type="text" placeholder="Lokasi" 
                        className="input h-10 bg-white w-full text-primary placeholder:text-primary cursor-pointer"
                         readOnly />
                      <div className="absolute top-15 inset-y-2 right-2">
                        <ArrowDropdown color={"#00529C"} />
                      </div>
                      <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                        <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Semua">Semua</li>
                        <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Bali">Bali</li>
                        <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Jakarta">Jakarta</li>
                        <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Jawa Barat">Jawa Barat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
    </>
  )
}

export default Header