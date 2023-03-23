import { useState } from "react"
import PurchaseCash from "./PurchaseCash";

interface PurchaseTypeProps {
  toggle: boolean;
  onClose: Function;
}

export default function PurchaseType({toggle, onClose}: PurchaseTypeProps) {
  const [open, setOpen] = useState(toggle);
  const [cash, setCash] = useState(false);
  const [kpr, setKpr] = useState(false);
  const [modalCash, setModalCash] = useState(false);
  const [modalKpr, setModalKpr] = useState(false);

  const toggleHandler = () => {}

  const closeHandler = () => {
    onClose(false);
    setOpen(false);
  }

  const handleCash = () => {
    setCash(true);
    setKpr(false);
  }

  const handleKpr = () => {
    setKpr(true);
    setCash(false);
  }

  const handleNext = () => {
    if (!kpr && !cash) return alert('pilih dulu kak');
    if (cash) {
      setModalCash(true);
      setOpen(false)
    }
  }

  return (
    <>
      {open && <>
        <input type="checkbox" className="modal-toggle" checked={open} onChange={toggleHandler} />
        <div className="modal">
          <div className="modal-box p-0 rounded-lg relative">
            <div className="border-b pb-3 pt-4 px-6 flex items-center justify-between">
              <span className="text-primary font-bold">Ajukan Pembelian</span>
              <label
                onClick={closeHandler}
                className="w-6 h-6 border-2 border-gray-400 flex justify-center items-center rounded-full text-gray-400 cursor-pointer"
              >
                ✕
              </label>
            </div>
            <div className="px-6 pt-6 pb-7">
              <div className="flex grid grid-cols-2 gap-6 mb-5">
                <div className="border rounded-md p-4 cursor-pointer" onClick={handleCash}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center flex-col w-full">
                      <div className="w-full text-right">
                        <input type="radio" className="radio radio-primary" checked={cash} onChange={() => cash} />
                      </div>
                      <div className="w-32 h-32 rounded-full bg-blue-100"></div>
                    </div>
                    <h1 className="text-xl font-semibold text-center leading-6">Pengajuan Pembelian Cash</h1>
                  </div>
                </div>
                <div className="border rounded-md p-4 cursor-pointer" onClick={handleKpr}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center flex-col w-full">
                      <div className="w-full text-right">
                        <input type="radio" className="radio radio-primary" checked={kpr} onChange={() => kpr} />
                      </div>
                      <div className="w-32 h-32 rounded-full bg-blue-100"></div>
                    </div>
                    <h1 className="text-xl font-semibold text-center leading-6">Pengajuan Pembelian KPR</h1>
                  </div>
                </div>
              </div>
              <button className="w-full rounded-md bg-primary py-3">
                <span className="text-white font-semibold" onClick={handleNext}>Lanjutkan dan Bayar</span>
              </button>
            </div>
          </div>
        </div>
      </>}
      {modalCash && <PurchaseCash onOpen={modalCash} onClose={() => onClose(false)} />}
    </>
  )
}