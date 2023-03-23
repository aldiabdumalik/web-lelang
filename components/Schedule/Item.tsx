import Link from "next/link";
import Image from "next/image";

export default function Item() {
  return (
    <table className="table table-compact w-full">
      <thead>
        <tr className="border-b">
          <th className="text-center bg-white text-sm">No</th>
          <th className="bg-white text-sm">Aset</th>
          <th className="bg-white text-sm">Kanca</th>
          <th className="bg-white text-sm">KPKNL</th>
          <th className="bg-white text-sm">PIC Lelang</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].fill(undefined).map((_, i) => {
          return (
            <tr key={i}>
              <th className="text-center">{i + 1}</th>
              <td className="py-7">
                <div className="flex gap-6 items-center">
                  <Image src={'/dump/detail-1.png'} width={208} height={156} className="w-208 h-40 object-cover rounded-md" alt="" priority />
                  <div className="text-sm">
                    <Link href={`/sale/${i + 1}`} className="text-primary font-bold cursor-pointer">Tanah dan Bangunan Rumah Jl. Haji Samanhudi Gg. Agatis, Pontianak Timur</Link>
                    <div className="grid grid-cols-2 mt-5">
                      <div className="flex flex-col">
                        <h5 className="font-bold leading-7 text-xs">Tempat Pelaksanaan Lelang</h5>
                        <span className="text-xs">KPKNL Pontianak</span>
                        <span className="text-xs">Jl. Letjen Sutoyo No. 19 Pontianak</span>
                      </div>
                      <div className="flex flex-col">
                        <h5 className="font-bold leading-7 text-xs">Jadwal</h5>
                        <span className="text-xs">28 September 2021 09:00 WIB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>Pontianak 2</td>
              <td>Pontianak</td>
              <td>
                <span className="text-primary">Syarifudin</span>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}