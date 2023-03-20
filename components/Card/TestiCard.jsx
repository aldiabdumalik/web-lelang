import Image from "next/image";
import Link from "next/link";

function TestiCard({text, name, status}) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl w-full sm:w-364 sm:gap-y-6">
        <Image src={"/img/icon/quote.svg"} alt={"quote"} width={26} height={19} />
        <div className="text-base font-medium text-start text-primary-text">{text}</div>
        <div className="flex items-center gap-x-4">
            <div className="w-16 h-16 rounded-full bg-primary"></div>
            <div className="flex flex-col">
                <p className="text-start text-lg font-normal text-primary-text">{name}</p>
                <p className="text-start text-sm font-normal text-secondary-text">{status}</p>
            </div>
        </div>
    </div>
  )
}

export default TestiCard