import { useWindowSize } from "@/plugins/window";
import style from "@/styles/CardGallery.module.css";
import Image from "next/image";

export default function Gallery() {
  const uws = useWindowSize();

  if (uws.width >= 768) {
    return (
      <div className={`${style.wrapperGallery} rounded-md`}>
        <Image src={'/dump/detail-1.png'} width={366} height={400} className="h-full" alt="" priority />
        <Image src={'/dump/detail-2.png'} width={366} height={400} className="h-full" alt="" priority />
        <Image src={'/dump/detail-3.png'} width={232} height={196} alt="" priority />
        <Image src={'/dump/detail-4.png'} width={232} height={196} alt="" priority />
        <div className={style.buttonExpand}>
          <button className="flex items-center gap-1 bg-white px-3 py-2 rounded-md">
            <Image src={'/icons/detail-expand.svg'} width={20} height={20} alt="" priority />
            <span className="text-sm text-primary font-semibold">40</span>
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative rounded-md overflow-hidden">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image src={'/dump/detail-1.png'} width={366} height={200} className="h-48 object-cover" alt="" priority />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <Image src={'/dump/detail-2.png'} width={366} height={200} className="h-48 object-cover" alt="" priority />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <Image src={'/dump/detail-3.png'} width={366} height={200} className="h-48 object-cover" alt="" priority />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <Image src={'/dump/detail-4.png'} width={366} height={200} className="h-48 object-cover" alt="" priority />
          </div>
        </div>
        <div className={style.buttonExpand}>
          <button className="flex items-center gap-1 bg-white px-3 py-2 rounded-md">
            <Image src={'/icons/detail-expand.svg'} width={20} height={20} alt="" priority />
            <span className="text-sm text-primary font-semibold">40</span>
          </button>
        </div>
      </div>
    )
  }
}