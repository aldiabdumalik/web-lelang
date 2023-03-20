import Image from "next/image";

export default function Facility() {
  return (
    <div className="mt-4 p-4 border rounded-md">
      <span className="text-lg font-semibold">Fasilitas</span>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/swim.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Kolam Renang</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/club_house.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Club House</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/parking.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Tempat Parkir</span>
          </div>
          <span className="text-xs font-bold">Panas & Dingin</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/CCTV.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Keamanan</span>
          </div>
          <span className="text-xs font-bold">CCTV, One Gate</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/tree.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Penghijauan</span>
          </div>
          <span className="text-xs font-bold">8m2</span>
        </div>
      </div>
    </div>
  )
}