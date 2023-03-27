import { useWindowSize } from "@/plugins/window";
import style from "@/styles/CardGallery.module.css";
import Image from "next/image";
interface GalleryProps {
  images: any;
}

interface ImageProps {
  d: string;
  i: number;
}

export default function Gallery({images}: GalleryProps) {
  const uws = useWindowSize();
  if (uws.width >= 768) {
    return (
      <div className={`${style.wrapperGallery} rounded-md`}>
        {
          images.map((d:any, i:any) => {
            return (
              <Image key={i} src={d} width={(i < 2) ? 366 : 232} height={(i < 2) ? 400 : 196} className={(i < 2) ? "h-full" : ""} alt="" priority />
            );
          })
        }
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
          {
            images.map((d:any, i:any) => {
              return (
                <div id={"item" + i}key={i} className="carousel-item w-full">
                  <Image src={d} width={366} height={200} className="h-48 object-cover" alt="" priority />
                </div>
              )
            })
          }
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