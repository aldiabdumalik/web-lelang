export default function Calculator() {
  const handlePeriod = data => {
    console.log(data)
  }

  return (
    <div className="mt-6 border rounded-md p-4 shadow">
      <div className="text-lg font-semibold text-primary">Kalkulator KPR</div>
      <div className="mt-5">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm">Harga Properti</span>
          <div className="h-11 flex border rounded-md overflow-hidden">
            <div className="h-full px-3 flex items-center border-r bg-disabled text-gray-500">Rp</div>
            <input type="text" className="h-full w-full px-3" value={'1.200.000.000'} disabled />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-4">
          <span className="text-sm">Uang Muka</span>
          <div className="h-11 flex border rounded-md overflow-hidden">
            <div className="h-full px-3.5 flex items-center">Rp</div>
            <input type="text" className="h-full w-full px-3" value={'240.000.000'} onChange={evt => console.log(evt.target.value)} />
            <div className="h-full pr-3 flex items-center text-xs text-gray-500">20%</div>
          </div>
          <span className="text-xs text-gray-500">Minimal 20% dari harga properti</span>
        </div>
        <div className="flex flex-col gap-1.5 mt-4">
          <span className="text-sm">Jumlah Pinjaman</span>
          <div className="h-11 flex border rounded-md overflow-hidden">
            <div className="h-full px-3 flex items-center border-r">Rp</div>
            <input type="text" className="h-full w-full px-3" value={'960.000.000'} onChange={evt => console.log(evt.target.value)} />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-4">
          <span className="text-sm">Jangka Waktu</span>
          <div className="h-11 flex border rounded-md overflow-hidden">
            <select className="h-full w-full px-3" onChange={handlePeriod}>
              <option value="15">15 Tahun</option>
              <option value="20">20 Tahun</option>
            </select>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 my-5">
        *Catatan: Perhitungan ini adalah hasil perkiraaan aplikasi KPR secara umum. Data perhitungan di atas dapat berbeda dengan perhitungan bank. Untuk perhitungan yang akurat, silahkan hubungi kantor cabang kami.
      </div>
      <button className="w-full text-white font-semibold rounded-md bg-secondary py-2.5">Lihat Kalkulasi</button>
    </div>
  )
}