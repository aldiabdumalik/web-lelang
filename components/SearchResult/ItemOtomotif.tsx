import React from "react";
import Image from "next/image";

interface ItemProps {
  id?: number;
  title?: string;
}

export default function ItemOtomotif({id, title}: ItemProps) {
  return (
    <div className="flex flex-col gap-6 py-6 px-0 md:px-6" key={id}>
      <div className="relative">
        <div className="rounded-md overflow-hidden">
          <Image
            src={'/img/dump/car.png'}
            width={256}
            height={248}
            className="w-full h-64 object-cover md:w-64"
            alt=""
            priority
          />
        </div>
        {/* <div className="absolute top-2 left-2">
          <button className="bg-white flex items-center gap-2 px-2 py-2.5 rounded-md border shadow-md">
            <Image src={'/icons/cube_3d.svg'} width={20} height={20} alt="" priority />
            <span className="text-primary text-xs font-semibold">Virtual 360</span>
          </button>
        </div> */}
      </div>
      <div className="relative flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3.5">
          <span className="text-xs text-primary font-semibold py-1 px-2 bg-blue-100 rounded-md">Grade C</span>
        </div>
        <h3 className="text-lg font-semibold leading-5">{title}</h3>
        <span className="text-sm text-gray-400 leading-6">Jakarta Utara, DKI Jakarta</span>
        <h2 className="text-xl font-bold text-primary mt-4">Rp1.200.000.000</h2>
        <div className="mt-5 flex flex-col gap-y-2">
            <div className="flex items-center">
                <div className="flex items-center gap-x-2 flex-1">
                    <Image src={'/img/icon/search-clock.svg'} width={20} height={20} alt="" priority />
                    <span className="text-sm">2019</span>
                </div>
                <div className="flex items-center gap-x-2 flex-1">
                    <Image src={'/img/icon/search-clock.svg'} width={20} height={20} alt="" priority />
                    <span className="text-sm">AT</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-x-2 flex-1">
                    <Image src={'/img/icon/search-bensin.svg'} width={20} height={20} alt="" priority />
                    <span className="text-sm">Bensin</span>
                </div>
                <div className="flex items-center gap-x-2 flex-1">
                    <Image src={'/img/icon/search-speed.svg'} width={20} height={20} alt="" priority />
                    <span className="text-sm">50000 KM</span>
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 lg:right-10 cursor-pointer">
          <Image src={'/icons/love_orange.svg'} width={28} height={28} alt="" priority />
        </div>
      </div>
    </div>
  )
}
