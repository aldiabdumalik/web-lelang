import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface PurchaseKprProps {
  onOpen: boolean;
  onClose: Function;
}

export default function PurchaseKpr({onOpen, onClose}: PurchaseKprProps) {
  const rts = useRouter();
  const [open, setOpen] = useState(onOpen);
  const [kprType, setKprType] = useState('syariah');

  const closeHandler = () => {
    setOpen(false);
    onClose(false);
  }

  const toggleHandler = () => {}

  const goSchema = () => {
    rts.push(`/sale/${rts.query.sale}/calculator`);
  }

  return (
    <>
      <input type="checkbox" className="modal-toggle" checked={open} onChange={toggleHandler} />
      <div className="modal">
        <div className="modal-box p-0 rounded-lg relative">
          <div className="border-b pb-3 pt-4 px-6 flex items-center justify-between">
            <span className="text-primary font-bold">Pengajuan Pembelian KPR</span>
            <label
              onClick={closeHandler}
              className="w-6 h-6 border-2 border-gray-400 flex justify-center items-center rounded-full text-gray-400 cursor-pointer"
            >
              ✕
            </label>
          </div>
          <div className="pb-6 px-6 pt-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Lokasi</span>
              <input type="text" className="text-sm py-2.5 px-3.5 rounded-md border" defaultValue={'Sleman, Yogyakarta'} disabled />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm font-semibold">Harga Properti</span>
              <div className="flex items-center">
                <div className="h-10 px-3 text-sm bg-disabled rounded-l-md flex items-center">
                  <span className="text-gray-500">Rp</span>
                </div>
                <input type="text" className="w-full text-sm h-10 px-3.5 rounded-r-md border" defaultValue={'1.200.000.000'} disabled />
              </div>
            </div>
            <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Luas Tanah</span>
                <div className="flex items-center">
                  <input type="text" className="text-sm h-10 px-3.5 rounded-l-md border w-full" defaultValue={'100'} disabled />
                  <div className="h-10 pl-2 pr-3 text-sm bg-disabled rounded-r-md flex items-center">
                    <span className="text-gray-500">m²</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Luas Bangunan</span>
                <div className="flex items-center">
                  <input type="text" className="text-sm h-10 px-3.5 rounded-l-md border w-full" defaultValue={'72'} disabled />
                  <div className="h-10 pl-2 pr-3 text-sm bg-disabled rounded-r-md flex items-center">
                    <span className="text-gray-500">m²</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm font-semibold">Jenis Properti</span>
              <input type="text" className="text-sm py-2.5 px-3.5 rounded-md border" defaultValue={'Non-Subsidi'} disabled />
            </div>
            <div className="border-b my-5"></div>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <div
                className={`flex items-center gap-3 rounded-md px-4 py-3 cursor-pointer border ${kprType == 'syariah' ? 'border-primary bg-blue-100' : 'bg-white'}`}
                onClick={() => setKprType('syariah')}
              >
                <input type="radio" className="radio radio-primary" checked={kprType == 'syariah'} onChange={() => setKprType('syariah')} />
                <span className="text-sm">KPR BRI Syariah</span>
              </div>
              <div
                className={`flex items-center gap-3 rounded-md px-4 py-3 cursor-pointer border ${kprType == 'konvensional' ? 'border-primary bg-blue-100' : 'bg-white'}`}
                onClick={() => setKprType('konvensional')}
              >
                <input type="radio" className="radio radio-primary" checked={kprType == 'konvensional'} onChange={() => setKprType('konvensional')} />
                <span className="text-sm">KPR BRI Konvensional</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm font-semibold">Uang Muka</span>
              <div className="flex items-center">
                <div className="h-10 px-3 text-sm border rounded-l-md flex items-center border-r-0">
                  <span className="">Rp</span>
                </div>
                <input type="text" className="w-full text-sm h-10 px-3.5 border border-r-0" defaultValue={'240.000.000'} />
                <div className="h-10 px-3 text-sm border rounded-r-md flex items-center border-l-0">
                  <span className="text-xs text-gray-400">20%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm font-semibold">Suku Bunga</span>
              <div className="flex items-center">
                <input type="text" className="w-full text-sm h-10 px-3.5 border border-r-0 rounded-l-md text-gray-400" defaultValue={'8.50'} />
                <div className="h-10 px-3 text-sm border rounded-r-md flex items-center border-l-0">
                  <span className="text-xs text-gray-400">%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm font-semibold">Suku Bunga</span>
              <div className="flex items-center">
                <div className="h-10 px-3.5 border rounded-md w-full flex">
                  <select className="text-sm w-full" onChange={() => console.log('suku bunga')}>
                    <option value="">15 Tahun</option>
                    <option value="">20 Tahun</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-6 leading-4 text-xs text-gray-400">
              *Catatan: Perhitungan ini adalah hasil perkiraaan aplikasi KPR secara umum. Data perhitungan di atas dapat berbeda dengan perhitungan bank. Untuk perhitungan yang akurat, silahkan hubungi kantor cabang kami.
            </div>
            <button className="w-full rounded-md bg-primary py-3" onClick={goSchema}>
              <span className="text-white font-semibold">Simulasi KPR dan Lanjut</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}