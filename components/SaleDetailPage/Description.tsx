import React from "react";
import Image from "next/image";

interface DescriptionProps {
  data: any;
}

export default function Description({data}: DescriptionProps) {
  return (
    <div className="mt-5">
      <div className="text-xl font-semibold">{data.title}</div>
      <span className="text-gray-400 text-sm">{data.location}</span>
      <div className="mt-6 gap-7 grid grid-cols-2 md:grid-cols-3">
        {Object.keys(data.facility).map((d, i) => {
          return (
            <React.Fragment key={d}>
              {d !== 'wide' ? <div className="flex items-center gap-2.5">
                <Image src={`/icons/${d}.svg`} width={24} height={24} alt="" priority />
                <div className="text-sm">
                  {data.facility[d]}
                  <span className="ml-1.5">
                    {d == 'bedroom' ? 'Kamar' : d == 'bathroom' ? 'Kamar Mandi' : 'Mobil'}
                  </span>
                </div>
              </div> : data.facility[d].map((d2: any, i2: any) => <div className="flex items-center gap-2.5" key={d2}>
                <Image src={`/icons/${i2 == 0 ? 'LT' : 'LB'}.svg`} width={24} height={24} alt="" priority />
                <div className="text-sm">
                  {data.facility[d][i2]}
                  <span className="ml-1.5">m2</span>
                </div>
              </div>)}
            </React.Fragment>
          )
        })}
      </div>
      <div className="mt-8">
        <span className="text-lg font-semibold">Deskripsi</span>
        <div className="text-sm text-gray-400 mt-2">{data.description}</div>
      </div>
      <div className="mt-6">
        <button className="flex items-center gap-2 px-2 py-2.5 rounded-md border shadow-md">
          <Image src={'/icons/cube_3d.svg'} width={20} height={20} alt="" priority />
          <span className="text-primary font-semibold">Lihat Virtual 360</span>
        </button>
      </div>
    </div>
  )
}