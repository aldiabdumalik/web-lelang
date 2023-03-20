import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/CardGallery.module.css";

export default function Detail() {
  return (
    <PageLayout>
      <div className="container flex flex-col items-center">
        <div className="w-full md:w-2/3 pt-7 pb-8">
          <div className="flex items-center justify-between gap-5">
            <Link href={'/'} className="flex items-center gap-2">
              <Image src={'/icons/arrow_back.svg'} width={20} height={20} alt="" priority />
              <span className="text-sm font-semibold text-primary">Kembali Ke Pencarian</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Home</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-gray-400">Yogyakarta</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-gray-400">Sleman</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-secondary font-semibold">Rumah Minimalis Green Residence</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className={`${style.wrapperGallery} rounded-md`}>
            <Image src={'/dump/detail-1.png'} width={366} height={400} className="h-full" alt="" priority />
            <Image src={'/dump/detail-2.png'} width={366} height={400} className="h-full" alt="" priority />
            <Image src={'/dump/detail-3.png'} width={232} height={196} alt="" priority />
            <Image src={'/dump/detail-4.png'} width={232} height={196} alt="" priority />
            <div className={style.buttonExpand}>
              <button className="flex items-center gap-1 bg-white px-3 py-2 rounded-md">
                <Image src={'/dump/detail-expand.svg'} width={20} height={20} alt="" priority />
                <span className="text-sm text-primary font-semibold">40</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}