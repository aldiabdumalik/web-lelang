import Image from "next/image";
import Link from "next/link";
import ButtonAction from "@/components/ButtonAction";

export default function Navbar() {
  return (
    <div className='flex flex-col md:flex-row px-6 py-5 items-center gap-12 bg-white border-b'>
      <Image
        className="object-cover"
        src='/infolelang.png'
        width={161}
        height={40}
        alt="infolelang logo"
        priority={1}
      />
      <div className="flex flex-col flex-1 md:flex-row gap-6">
        <Link href={'/schedule'} className="text-sm">Jadwal Lelang</Link>
        <Link href={'/'} className="text-sm">Prosedur</Link>
        <Link href={'/'} className="text-sm">Properti</Link>
        <Link href={'/'} className="text-sm">Otomotif</Link>
      </div>
      <ButtonAction
        label={"Daftar / Login"}
        style={"text-sm py-2.5 px-4 border border-primary font-semibold text-primary rounded-md cursor-pointer"}
        callback={() => console.log('cb')}
      />
    </div>
  )
}