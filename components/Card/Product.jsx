import Image from "next/image";

export default function Product({title, location, image}) {
  return (
    <div className="border rounded-md p-6">
      <div className="relative flex items-start gap-6">
        <Image src={image} width={200} height={200} className="object-cover" alt="" priority />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <span className="text-xs py-1 px-2 rounded-full text-primary font-semibold bg-blue-100">Rumah</span>
              <span className="text-xs py-1 px-2 rounded-full text-primary font-semibold bg-blue-100">Tipe 45</span>
            </div>
            <h6 className="text-lg font-semibold">{title}</h6>
            <span className="text-xs text-gray-400">{location}</span>
          </div>
          <div className="text-lg font-semibold text-primary">Rp675 Juta</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Image src={'/icons/bedroom.svg'} width={24} height={24} alt="" priority />
              <span className="text-sm">2 Kamar</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={'/icons/bathroom.svg'} width={24} height={24} alt="" priority />
              <span className="text-sm">1 Kamar Mandi</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={'/icons/garage.svg'} width={24} height={24} alt="" priority />
              <span className="text-sm">2 Mobil</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={'/icons/LB.svg'} width={24} height={24} alt="" priority />
              <span className="text-sm">100 m2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}