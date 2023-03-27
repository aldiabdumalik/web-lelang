import Image from "next/image";

export default function Schedule() {
  return (
    <div className=" border rounded-md p-4">
      <div className="text-lg font-semibold">Jadwal Lelang</div>
      <span className="text-xs font-semibold">Selasa, 17 Mei 2022</span>
      <div className="text-xs my-3.5">KPKNL Tangerang I menggunakan rekening Bank Negara Indonesia (BNI) Jalan Makan Pahlawan (TMP) Taruna Tangerang</div>
      <span className="text-xs">(021) 55794272</span>
      <div className="mt-3.5">
        <button className="bg-primary rounded-md py-2 px-3.5 flex items-center gap-2">
          <Image src={'/icons/price.svg'} width={20} height={20} alt="" priority />
          <span className="text-white font-bold text-xs">IKUT LELANG</span>
        </button>
      </div>
    </div>
  )
}