import Image from "next/image";

export default function Address() {
  return (
    <div className="mt-4 p-4 border rounded-md">
      <span className="text-lg font-semibold">Alamat</span>
      <div className="flex items-start gap-2 my-4">
        <Image src={'/icons/pin_drop.svg'} width={24} height={24} alt="" priority />
        <div className="text-sm text-gray-500">
          Kaliurang St No.KM 9.5, Jaban, Sardonoharjo, Ngaglik, Sleman Regency, Special Region of Yogyakarta 55582
        </div>
      </div>
      <Image src={'/dump/maps.png'} width={534} height={164} className=" object-cover" alt="" priority />
    </div>
  )
}