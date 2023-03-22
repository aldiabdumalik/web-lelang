import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface PaginationProps {
  pageLength: number;
}

export default function Pagination({pageLength}: PaginationProps) {
  const rts = useRouter();
  const [active, setActive] = useState(0);

  const hash = rts.asPath.split("#")[1];

  useEffect(() => {
    if (typeof hash !== "undefined") {
      if (pageLength <= 4) {
        setActive(Number(hash));
      }
    } else {
      setActive(1);
    }
  }, [hash]);

  const handlePrevious = () => {
    if (active > 1) {
      setActive(active - 1);
      if (typeof hash !== "undefined") {
        rts.replace(`${rts.asPath.split("#")[0]}#${active - 1}`)
      } else {
        rts.replace(`${rts.asPath}#${active - 1}`)
      }
    }
  }

  const handleNext = () => {
    if (active < pageLength) {
      setActive(active + 1);
      if (typeof hash !== "undefined") {
        rts.replace(`${rts.asPath.split("#")[0]}#${active + 1}`)
      } else {
        rts.replace(`${rts.asPath}#${active + 1}`)
      }
    }
  }

  const handleChangePage = (pageNum: number) => {
    if (pageNum !== active) {
      setActive(pageNum);
      if (typeof hash !== "undefined") {
        rts.replace(`${rts.asPath.split("#")[0]}#${pageNum}`)
      } else {
        rts.replace(`${rts.asPath}#${pageNum}`)
      }
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex items-center gap-2 h-10 px-2.5 border rounded-l-md cursor-pointer"
        onClick={handlePrevious}
      >
        <Image src={'/icons/arrow_pagination.svg'} width={20} height={20} alt="prev" priority />
        <span className="text-sm font-semibold">Previous</span>
      </div>
      {[...Array(pageLength)].fill(undefined).map((_, i) => {
        return (
          <div
            key={i}
            className={`cursor-pointer flex justify-center items-center h-10 w-10 border-r border-y ${active == i + 1 ? 'bg-secondary text-white' : ''}`}
            onClick={() => handleChangePage(i + 1)}
          >
            <span className="font-semibold">{i + 1}</span>
          </div>
        )
      })}
      <div
        className="flex items-center gap-2 h-10 px-2.5 border-r border-y rounded-r-md cursor-pointer"
        onClick={handleNext}
      >
        <span className="text-sm font-semibold">Next</span>
        <Image src={'/icons/arrow_pagination.svg'} width={20} height={20} className="rotate-180" alt="prev" priority />
      </div>
    </div>
  )
}