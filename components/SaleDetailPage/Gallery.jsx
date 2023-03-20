import style from "@/styles/CardGallery.module.css";
import Image from "next/image";

export default function Gallery() {
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
}