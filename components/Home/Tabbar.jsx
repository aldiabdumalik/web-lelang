import React, { useState } from 'react'
import Image from "next/image";
const types = ['Properti', 'Otomotif', 'Mesin', 'Lainnya'];

function Tabbar() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div className="flex gap-x-4 c-tabs">
        {
          types.map(type => (
            <div className={"font-semibold text-white py-1 px-2 " + (active === type ? "active" : "")} key={type} onClick={() => setActive(type)}>{type}</div>
          ))
        }
      </div>
      <hr className="border-black" />
      <div className="flex mt-6">
          <div className="flex property gap-x-4 w-full">
              <div className="h-14 grow bg-white rounded-md flex items-center text-base relative">
                <input type="text" placeholder="Cari berdasarkan lokasi, area sekitar, atau nama asset" className="input bg-transparent w-full pl-10" />
                <Image src={"/img/icon/search-placeholder.svg"} width={0} height={0} className="w-6 h-6 absolute left-2" alt="arrow" />
              </div>
              <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                <div className="dropdown w-full relative">
                  <input type="text" placeholder="Lokasi" className="input bg-transparent w-full text-white placeholder:text-white" readOnly />
                  <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                  <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal">Semua</li>
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal">Bali</li>
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal">Jakarta</li>
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal">Jawa Barat</li>
                  </ul>
                </div>
              </div>
              { (active === 'Properti') && (
                <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                  <div className="dropdown w-full relative">
                    <input type="text" placeholder="Tipe" className="input bg-transparent w-full text-white placeholder:text-white" readOnly />
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                    <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Semua</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Apartemen</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Rumah</li>
                    </ul>
                  </div>
                </div>
              )}
              { (active === 'Otomotif' || active === 'Mesin') && (
                <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                  <div className="dropdown w-full relative">
                    <input type="text" placeholder="Merk" className="input bg-transparent w-full text-white placeholder:text-white" readOnly />
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                    <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Semua</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Audi</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">BMW</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Ford</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Honda</li>
                    </ul>
                  </div>
                </div>
              )}
              { (active === 'Otomotif') && (
                <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                  <div className="dropdown w-full relative">
                    <input type="text" placeholder="Seri" className="input bg-transparent w-full text-white placeholder:text-white" readOnly />
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                    <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Semua</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">APV</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Balino</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal">Ertiga</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                <div className="dropdown w-full">
                  <div className="flex items-center px-4">
                    <label tabIndex={0} className="block w-full bg-transparent text-start text-white">Harga</label>
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6" alt="arrow" />
                  </div>
                  <div tabIndex={0} className="dropdown-content w-96 menu p-2 sm:p-5 shadow bg-base-100 top-12 right-0 rounded-xl">
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
    </>
  )
}

export default Tabbar