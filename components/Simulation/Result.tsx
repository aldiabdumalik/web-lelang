import { useState } from "react";
import Loan from "@/components/Simulation/Part/Loan";
import Installment from "@/components/Simulation/Part/Installment";

export default function Result() {
  const [info, setInfo] = useState('rincian');

  return (
    <div className="bg-white w-full border rounded-md p-4 shadow">
      <div className="flex items-center gap-4 h-8">
        <div
          className={`h-full cursor-pointer ${info == 'rincian' ? 'border-b-2 border-secondary' : 'text-gray-400'}`}
          onClick={() => setInfo('rincian')}
        >
          <span className="text-sm font-semibold">Rincian Pinjaman</span>
        </div>
        <div
          className={`h-full cursor-pointer ${info == 'detail' ? 'border-b-2 border-secondary' : 'text-gray-400'}`}
          onClick={() => setInfo('detail')}
        >
          <span className="text-sm font-semibold">Detail Angsuran</span>
        </div>
      </div>
      <div className="mt-5">
        {info == 'rincian' && <Loan />}
        {info == 'detail' && <Installment />}
      </div>
      <div className="mt-5">
        <div className="flex flex-col md:flex-row gap-4">
          <button className="py-3 border border-primary rounded-md w-full">
            <span className="text-primary font-semibold">Download Detail</span>
          </button>
          <button className="py-3 border border-primary bg-primary rounded-md w-full">
            <span className="text-white font-semibold">Pilih Unit</span>
          </button>
        </div>
      </div>
      <div className="mt-4 text-gray-400 text-xs">
        Catatan: Perhitungan ini adalah hasil perkiraaan aplikasi KPR secara umum. Data perhitungan di atas dapat berbeda dengan perhitungan bank. Untuk perhitungan yang akurat, silahkan hubungi kantor cabang kami.
      </div>
    </div>
  )
}