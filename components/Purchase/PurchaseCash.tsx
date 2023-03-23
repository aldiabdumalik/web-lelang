import { useState } from "react";
import Image from "next/image";

interface PurchaseCashProps {
  onOpen: boolean;
  onClose: Function;
}

export default function PurchaseCash({onOpen, onClose}: PurchaseCashProps) {
  const [open, setOpen] = useState(onOpen);

  const closeHandler = () => {
    setOpen(false);
    onClose(false);
  }

  const toggleHandler = () => {}

  return (
    <>
      <input type="checkbox" className="modal-toggle" checked={open} onChange={toggleHandler} />
      <div className="modal">
        <div className="modal-box p-0 rounded-lg relative">
          <div className="border-b pb-3 pt-4 px-6 flex items-center justify-between">
            <span className="text-primary font-bold">Pengajuan Pembelian Cash</span>
            <label
              onClick={closeHandler}
              className="w-6 h-6 border-2 border-gray-400 flex justify-center items-center rounded-full text-gray-400 cursor-pointer"
            >
              ✕
            </label>
          </div>
          <div className="p-6">
            <div className="border-b pb-3">
              <span>ID TRANSAKSI #2141241241238123712</span>
            </div>
            <div className="my-5">
              <div className="flex items-center gap-2">
                <Image src={'/icons/bri_small.svg'} width={68} height={42} alt="" priority />
                <span>Virtual Account</span>
              </div>
              <div className="relative bg-gray-300 rounded-md p-3 mt-3 mb-4">
                <span className="text-lg md:text-3xl leading-0">1235567834679975</span>
                <div className="absolute inset-y-0 right-8 w-16 flex items-center">
                  <button className="bg-white border border-secondary rounded-md py-1 px-6">
                    <span className="text-sm font-semibold text-secondary">Salin</span>
                  </button>
                </div>
              </div>
              <span>Total Nominal Transfer</span>
              <div className="relative bg-gray-300 rounded-md p-3 mt-3 mb-4">
                <span className="text-lg md:text-3xl leading-0">Rp1.200.000.000</span>
                <div className="absolute inset-y-0 right-8 w-16 flex items-center">
                  <button className="bg-white border border-secondary rounded-md py-1 px-6">
                    <span className="text-sm font-semibold text-secondary">Salin</span>
                  </button>
                </div>
              </div>
              <div className="text-sm">
                Transfer sebelum <span className="font-bold">29 Mar 20222 09:48 WIB</span> atau transaksimu akan dibatalkan secara otomatis oleh sistem
              </div>
            </div>
            <button className="w-full rounded-md bg-primary py-3">
              <span className="text-white font-semibold">Konfirmasi Sudah Membayar</span>
            </button>
            <button className="w-full py-3" onClick={closeHandler}>
              <span className="text-gray-400 font-semibold">Batalkan Transaksi</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}