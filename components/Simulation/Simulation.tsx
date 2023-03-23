export default function Calculator() {
  const handlePeriod = (data: any) => {
    console.log(data)
  }

  const handleRate = (data: any) => {
    console.log(data)
  }

  const handleSubsidy = (data: any) => {
    console.log(data)
  }

  const handleCredit = (data: any) => {
    console.log(data)
  }

  return (
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
  )
}