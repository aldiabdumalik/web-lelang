import { useState } from "react";
import PageLayout from "@/layouts/PageLayout";
import Loan from "@/components/Simulation/Loan";
import Installment from "@/components/Simulation/Installment";

export default function Calculator() {
  const [info, setInfo] = useState('rincian');

  const handlePeriod = data => {
    console.log(data)
  }

  const handleRate = data => {
    console.log(data)
  }

  const handleSubsidy = data => {
    console.log(data)
  }

  const handleCredit = data => {
    console.log(data)
  }

  return (
    <PageLayout>
      <div className="bg-gray-50">
        <div className="container mx-auto flex justify-center py-12">
          <div className="w-full md:w-5/6">
            <div className="flex flex-col mb-6">
              <h2 className="text-xl font-semibold">Kalkulator Simulasi KPR</h2>
              <span className="text-sm text-gray-400">Simulasikan KPR Anda dengan cepat, aman dan jelas</span>
            </div>
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="bg-white w-full md:w-80 border rounded-md p-4 shadow">
                <div className="text-lg font-semibold text-primary">Kalkulator KPR</div>
                <div className="mt-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm">Jenis Suku Bunga</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <select className="text-sm h-full w-full px-3" onChange={handleRate}>
                        <option value="15">Anuitas</option>
                        <option value="20">Anuitas 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Jenis Subsidi</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <select className="text-sm h-full w-full px-3" onChange={handleSubsidy}>
                        <option value="15">Anuitas</option>
                        <option value="20">Anuitas 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Harga Properti</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <div className="text-sm h-full px-3 flex items-center border-r">Rp</div>
                      <input type="text" className="text-sm h-full w-full px-3" defaultValue={'1.200.000.000'} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Uang Muka</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <div className="text-sm h-full px-3.5 flex items-center">Rp</div>
                      <input type="text" className="text-sm h-full w-full px-3" defaultValue={'240.000.000'} />
                      <div className="text-xs h-full pr-3 flex items-center text-gray-500">20%</div>
                    </div>
                    <span className="text-xs text-gray-500">Minimal 20% dari harga properti</span>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Suku Bunga Per Tahun</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <input type="text" className="text-sm h-full w-full px-3" defaultValue={'8.50'} />
                      <div className="text-xs h-full pr-3 flex items-center text-gray-500">%</div>
                    </div>
                    <span className="text-xs text-gray-500">Suku Bunga Bank fix selama 20 tahun</span>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Lama Pinjaman</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <select className="text-sm h-full w-full px-3" onChange={handlePeriod}>
                        <option value="15">15 Tahun</option>
                        <option value="20">20 Tahun</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Masa Kredit Fix</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <select className="text-sm h-full w-full px-3" onChange={handleCredit}>
                        <option value="15">2 Tahun</option>
                        <option value="20">3 Tahun</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm">Suku Bunga Floating Per Tahun</span>
                    <div className="h-11 flex border rounded-md overflow-hidden">
                      <input type="text" className="text-sm h-full w-full px-3" defaultValue={'13.50'} />
                      <div className="text-xs h-full pr-3 flex items-center text-gray-500">%</div>
                    </div>
                    <span className="text-xs text-gray-500">Setelah 1 tahun akan mengikuti Suku Bunga Bank BI yang berlaku saat itu</span>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="w-full text-sm text-white font-semibold rounded-md bg-primary py-2.5">Hitung Simulasi</button>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}