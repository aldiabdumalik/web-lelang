export default function Loan() {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex flex-col gap-3 mb-5">
        <div className="border-b h-9">
          <span className="text-primary font-semibold">Informasi Detail</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Suku Bunga /Tahun</span>
            <span className="text-sm text-gray-400">3.72%</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Bunga Floating /Tahun</span>
            <span className="text-sm text-gray-400">13.5%</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Kredit Fix 12 Bulan</span>
            <span className="text-sm text-gray-400">12 Bulan</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Lama Pinjaman</span>
            <span className="text-sm text-gray-400">360 Bulan</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Jumlah Pinjaman Maksimal</span>
            <span className="text-sm text-gray-400">Rp939.032.400</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Uang Muka (DP)</span>
            <span className="text-sm text-gray-400">Rp165.711.600</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <div className="border-b h-9">
          <span className="text-primary font-semibold">Biaya Bank</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Appraisal</span>
            <span className="text-sm text-gray-400">Rp1.500.000</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Administrasi</span>
            <span className="text-sm text-gray-400">Rp0</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Proses</span>
            <span className="text-sm text-gray-400">Rp0</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Provisi</span>
            <span className="text-sm text-gray-400">Rp9.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Asuransi</span>
            <span className="text-sm text-gray-400">Rp9.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400 text-secondary font-bold">Total Biaya Bank</span>
            <span className="text-sm text-gray-400 text-secondary font-bold">Rp20.280.648</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="border-b h-9">
          <span className="text-primary font-semibold">Biaya Notaris</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Akte Jual Beli</span>
            <span className="text-sm text-gray-400">Rp9.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Bea Balik Nama</span>
            <span className="text-sm text-gray-400">Rp8.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Akta SKMHT</span>
            <span className="text-sm text-gray-400">Rp7.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Akta APHT</span>
            <span className="text-sm text-gray-400">Rp6.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Perjanjian HT</span>
            <span className="text-sm text-gray-400">Rp5.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400">Cek Sertifikat ZNT, PNBP HT</span>
            <span className="text-sm text-gray-400">Rp4.390.324</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <span className="text-sm text-gray-400 text-secondary font-bold">Total Biaya Notaris</span>
            <span className="text-sm text-gray-400 text-secondary font-bold">Rp46.951.620</span>
          </div>
        </div>
      </div>
    </div>
  )
}