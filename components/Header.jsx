import React from 'react'
import Image from "next/image";

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
                <div className="flex gap-x-4">
                    <div className="font-semibold text-white py-1 px-2">Properti</div>
                    <div className="font-semibold text-white py-1 px-2">Otomotif</div>
                    <div className="font-semibold text-white py-1 px-2">Mesin</div>
                    <div className="font-semibold text-white py-1 px-2">Lainnya</div>
                </div>
                <hr/>
                <div className="flex mt-6">
                    <div className="flex property gap-x-4 w-full">
                        <div className="h-14 grow bg-white rounded-md flex items-center text-base">
                          <input type="text" placeholder="Cari berdasarkan lokasi, area sekitar, atau nama asset" className="input bg-transparent w-full" />
                        </div>
                        <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                          <select className="select bg-transparent w-full max-w-xs text-white" defaultValue={"Lokasi"}>
                              <option value={"Lokasi"}>Lokasi</option>
                          </select>
                        </div>
                        <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                          <select className="select bg-transparent w-full max-w-xs text-white" defaultValue={"Tipe"}>
                              <option value={"Tipe"}>Tipe</option>
                          </select>
                        </div>
                        <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                          <div className="dropdown w-full">
                            <div className="flex items-center px-4">
                              <label tabIndex={0} className="block w-full bg-transparent text-start text-white">Harga</label>
                              <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6" alt="arrow" />
                            </div>
                            <div tabIndex={0} className="dropdown-content w-96 menu p-2 sm:p-5 shadow bg-base-100 top-14 right-0 rounded-xl">
                              <div className="flex flex-col gap-y-4">
                                <input type="range" min="0" max="100" className="range h-1" />
                                <div className="flex flex-col sm:flex-row gap-x-4 items-center">
                                  <div className="border p-6 flex-1 rounded-md flex flex-col">
                                    Harga Min
                                    <span>Rp. 0</span>
                                  </div>
                                  <div>-</div>
                                  <div className="border p-6 flex-1 rounded-md flex flex-col">
                                    Harga Min
                                    <span>Rp. 0</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-14 flex-none px-8 bg-secondary rounded-md flex justify-center items-center text-white text-base">Cari</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header