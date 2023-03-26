import Image from "next/image";
import Link from "next/link";

export default function ItemMobile() {
  return (
    <div className="flex flex-col gap-5 mt-3">
      {[...Array(10)].fill(undefined).map((_, i) => {
        return (
          <div key={i} className="relative">
            <div className="relative">
              <Image src={'/dump/detail-1.png'} width={208} height={156} className="w-full h-40 object-cover rounded-md" alt="" priority />
              <div className="absolute top-0">
                <div className="text-xs bg-blue-200 p-2 rounded-l-md">
                  <p>Kanca: Pontianak 2</p>
                  <p>KPKNL: Pontianak</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <span className="text-xs text-white bg-secondary p-2 rounded-md">Syarifudin</span>
              </div>
            </div>
            <div className="leading-4 mt-3">
              <Link href={`/sale/${i + 1}`} className="text-primary font-bold cursor-pointer">Tanah dan Bangunan Rumah Jl. Haji Samanhudi Gg. Agatis, Pontianak Timur</Link>
            </div>
            <div className="flex flex-col mt-2">
              <h5 className="font-bold leading-5 text-xs">Tempat Pelaksanaan Lelang</h5>
              <span className="text-xs">KPKNL Pontianak</span>
              <span className="text-xs">Jl. Letjen Sutoyo No. 19 Pontianak</span>
            </div>
            <div className="flex flex-col mt-1">
              <h5 className="font-bold leading-5 text-xs">Jadwal</h5>
              <span className="text-xs">28 September 2021 09:00 WIB</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}