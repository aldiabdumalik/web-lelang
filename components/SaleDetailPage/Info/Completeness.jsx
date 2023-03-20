import Image from "next/image";

export default function Completeness() {
  return (
    <div className="mt-4 p-4 border rounded-md">
      <span className="text-lg font-semibold">Kelengkapan Rumah</span>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/cooking.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Dapur</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/phone_1.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Jalur Telpon</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/lightning.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Jalur Listrik</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/living.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Ruang Keluarga</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/drop_water.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Jalur PDAM</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/laptop.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Ruang Kerja</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
      </div>
    </div>
  )
}