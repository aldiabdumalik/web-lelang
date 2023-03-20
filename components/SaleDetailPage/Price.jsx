import Image from "next/image";

export default function Price({price}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-primary font-bold text-3xl">Rp{price}</div>
      <div className="bg-green-200 flex items-center gap-1.5 py-1.5 px-3 rounded-full">
        <Image src={'/icons/price_green.svg'} width={16} height={16} alt="" priority />
        <span className="text-green-600">Jual Damai</span>
      </div>
    </div>
  )
}