import Image from "next/image";

export default function Access() {
  return (
    <div className="mt-4 p-4 border rounded-md">
      <span className="text-lg font-semibold">Akses</span>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/first_aid.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Rumah Sakit</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/shopping_bag.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Mall</span>
          </div>
          <span className="text-xs font-bold">Tidak</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/bus.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Jalan Tol</span>
          </div>
          <span className="text-xs font-bold">Tidak</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/train.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Stasiun</span>
          </div>
          <span className="text-xs font-bold">Ya</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 w-full md:w-1/2">
            <Image src={'/icons/backpack.svg'} width={20} height={20} alt="" priority />
            <span className="text-xs">Sekolah</span>
          </div>
          <span className="text-xs font-bold">Tidak</span>
        </div>
      </div>
    </div>
  )
}