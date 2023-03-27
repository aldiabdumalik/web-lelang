export default function Information({category}: any) {
  return (
    <div className="mt-4 p-4 border rounded-md">
      <span className="text-lg font-semibold">Informasi {category == 'properti' ? "Properti" : "Kendaraan"}</span>
      {category == 'properti' && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Tipe Properti</span>
            <span className="text-sm font-semibold">Rumah</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Luas Tanah</span>
            <span className="text-sm font-semibold">220 m2</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Luas Bangunan</span>
            <span className="text-sm font-semibold">100 m2</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Kamar Tidur</span>
            <span className="text-sm font-semibold">2</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Kamar Mandi</span>
            <span className="text-sm font-semibold">1</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Setifikat</span>
            <span className="text-sm font-semibold">IMB, SHM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Jumlah Lantai</span>
            <span className="text-sm font-semibold">1</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Kondisi Properti</span>
            <span className="text-sm font-semibold">Baru</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Daya Listrik</span>
            <span className="text-sm font-semibold">1200 watt</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Hadap</span>
            <span className="text-sm font-semibold">Timur</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Jumlah Garasi</span>
            <span className="text-sm font-semibold">1</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Tahun Bangun</span>
            <span className="text-sm font-semibold">2022</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">Kamar Pembantu</span>
            <span className="text-sm font-semibold">1</span>
          </div>
        </div>
      )}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Nomor Polisi</span>
          <span className="text-sm font-semibold">B 2442 KO</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Nomor Rangka</span>
          <span className="text-sm font-semibold">MHKA4GA5JKJ039642</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Merk</span>
          <span className="text-sm font-semibold">Toyota</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Nomor Mesin</span>
          <span className="text-sm font-semibold">3NRH460342</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Seri</span>
          <span className="text-sm font-semibold">AgyaAgya</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Kilometer</span>
          <span className="text-sm font-semibold">37347</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">CC</span>
          <span className="text-sm font-semibold">1.2</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Bahan Bakar</span>
          <span className="text-sm font-semibold">Bensin</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Tipe</span>
          <span className="text-sm font-semibold">G</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Warna Fisik</span>
          <span className="text-sm font-semibold">Silver</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Transmisi</span>
          <span className="text-sm font-semibold">MT</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Penggerak</span>
          <span className="text-sm font-semibold">4X2</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Model Kendaraan</span>
          <span className="text-sm font-semibold">MinibusMinibus</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Tanggal Keluar</span>
          <span className="text-sm font-semibold">10-10-2023</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Tahun</span>
          <span className="text-sm font-semibold">2019</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 mb-1">Tanggal STNK</span>
          <span className="text-sm font-semibold">2010-10-2025</span>
        </div>
      </div>
    </div>
  )
}