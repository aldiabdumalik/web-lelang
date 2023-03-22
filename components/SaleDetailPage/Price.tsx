import Image from "next/image";
import { formatIDR } from "@/plugins/globalFunction";

interface PriceProps {
  price: any;
}

export default function Price({price}: PriceProps) {
  return (
    <div className="flex flex-col items-start md:flex-row md:items-center gap-2.5 relative">
      <div className="text-primary font-bold text-3xl">{formatIDR(price, 'Rp')}</div>
      <div className="bg-green-200 flex items-center gap-1.5 py-1.5 px-3 rounded-full">
        <Image src={'/icons/price_green.svg'} width={16} height={16} alt="" priority />
        <span className="text-green-600">Jual Damai</span>
      </div>
      <div className="absolute center-right">
        <div className="flex items-center gap-3">
          <Image src={'/icons/love_orange.svg'} width={20} height={20} className="cursor-pointer" alt="" priority />
          <Image src={'/icons/share_orange.svg'} width={20} height={20} className="cursor-pointer" alt="" priority />
        </div>
      </div>
    </div>
  )
}