import React from "react";
import Image from "next/image";

interface ItemProps {
  id?: number;
  title?: string;
}

export default function Item({id, title}: ItemProps) {
  return (
    <div className="flex flex-col gap-6 py-6 px-0 md:px-6 md:flex-row" key={id}>
      <div className="relative">
        <div className="rounded-md overflow-hidden">
          <Image
            src={'/dump/detail-1.png'}
            width={256}
            height={248}
            className="w-full h-64 object-cover md:w-64"
            alt=""
            priority
          />
        </div>
        <div className="absolute top-2 left-2">
          <button className="bg-white flex items-center gap-2 px-2 py-2.5 rounded-md border shadow-md">
            <Image src={'/icons/cube_3d.svg'} width={20} height={20} alt="" priority />
            <span className="text-primary text-xs font-semibold">Virtual 360</span>
          </button>
        </div>
      </div>
      <div className="relative flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3.5">
          <span className="text-xs text-primary font-semibold py-1 px-2 bg-blue-100 rounded-md">Rumah</span>
          <span className="text-xs text-primary font-semibold py-1 px-2 bg-blue-100 rounded-md">Tipe 45</span>
        </div>
        <h3 className="text-lg font-semibold leading-5">{title}</h3>
        <span className="text-sm text-gray-400 leading-6">Jakarta Utara, DKI Jakarta</span>
        <h2 className="text-xl font-bold text-primary mt-4">Rp1.200.000.000</h2>
        <div className="text-sm mt-5">
          Developer: <span className="text-secondary font-bold">Kawan Lama Properti</span>
        </div>
        <div className="mt-2 border rounded-md border-primary overflow-hidden">
          <div className="p-2.5 flex justify-between">
            <div className="flex items-center gap-2">
              <Image src={'/icons/bedroom.svg'} width={20} height={20} alt="" priority />
              <span className="text-xs">2 KT</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={'/icons/bathroom.svg'} width={20} height={20} alt="" priority />
              <span className="text-xs">2 KM</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={'/icons/garage.svg'} width={20} height={20} alt="" priority />
              <span className="text-xs">2 Parkir</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={'/icons/LB.svg'} width={20} height={20} alt="" priority />
              <span className="text-xs">100 m2</span>
            </div>
          </div>
          <div className="border-t border-primary p-2.5 bg-blue-100">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold">
                <span className="mr-1">KPR mulai dari</span>
                <span className="text-sm font-bold text-primary">3.600.000/bulan</span>
              </div>
              <div className="text-xs font-semibold">
                <span className="mr-1">Suku Bunga</span>
                <span className="text-sm font-bold text-primary">3.50%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 cursor-pointer">
          <Image src={'/icons/love_orange.svg'} width={28} height={28} alt="" priority />
        </div>
      </div>
    </div>
  )
}
