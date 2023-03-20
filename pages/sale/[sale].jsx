import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/CardGallery.module.css";

export default function Detail() {
  const handlePeriod = data => {
    console.log(data)
  }

  return (
    <PageLayout>
      <div className="container flex flex-col items-center">
        <div className="w-full md:w-2/3 pt-7 pb-8">
          <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
            <Link href={'/'} className="flex items-center gap-2">
              <Image src={'/icons/arrow_back.svg'} width={20} height={20} alt="" priority />
              <span className="text-sm font-semibold text-primary">Kembali Ke Pencarian</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Home</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-gray-400">Yogyakarta</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-gray-400">Sleman</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-secondary font-semibold">Rumah Minimalis Green Residence</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className={`${style.wrapperGallery} rounded-md`}>
            <Image src={'/dump/detail-1.png'} width={366} height={400} className="h-full" alt="" priority />
            <Image src={'/dump/detail-2.png'} width={366} height={400} className="h-full" alt="" priority />
            <Image src={'/dump/detail-3.png'} width={232} height={196} alt="" priority />
            <Image src={'/dump/detail-4.png'} width={232} height={196} alt="" priority />
            <div className={style.buttonExpand}>
              <button className="flex items-center gap-1 bg-white px-3 py-2 rounded-md">
                <Image src={'/icons/detail-expand.svg'} width={20} height={20} alt="" priority />
                <span className="text-sm text-primary font-semibold">40</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 mt-8">
          <div className="flex items-start gap-10 flex-col md:flex-row">
            <div className="w-full">
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <div className="text-primary font-bold text-3xl">Rp 2.3M</div>
                  <div className="bg-green-200 flex items-center gap-1.5 py-1.5 px-3 rounded-full">
                    <Image src={'/icons/price_green.svg'} width={16} height={16} alt="" priority />
                    <span className="text-green-600">Jual Damai</span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-xl font-semibold">AURORA Bukit Rancamaya Residence</div>
                  <span className="text-gray-400 text-sm">Sleman, Yogyakarta</span>
                  <div className="mt-6 gap-7 grid grid-cols-1 md:grid-cols-3">
                    <div className="flex items-center gap-2.5">
                      <Image src={'/icons/bedroom.svg'} width={24} height={24} alt="" priority />
                      <span className="text-sm">2 Kamar</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Image src={'/icons/bathroom.svg'} width={24} height={24} alt="" priority />
                      <span className="text-sm">1 Kamar Mandi</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Image src={'/icons/garage.svg'} width={24} height={24} alt="" priority />
                      <span className="text-sm">2 Mobil</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Image src={'/icons/LT.svg'} width={24} height={24} alt="" priority />
                      <span className="text-sm">220 m2</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Image src={'/icons/LB.svg'} width={24} height={24} alt="" priority />
                      <span className="text-sm">100 m2</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <span className="text-lg font-semibold">Deskripsi</span>
                    <div className="text-sm text-gray-400 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, purus dui purus turpis urna. Vel curabitur porttitor et vel praesent faucibus ut sodales. Ac adipiscing erat interdum sed commodo egestas.
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="flex items-center gap-2 px-2 py-2.5 rounded-md border shadow-md">
                      <Image src={'/icons/cube_3d.svg'} width={20} height={20} alt="" priority />
                      <span className="text-primary font-semibold">Lihat Virtual 360</span>
                    </button>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="p-4 border rounded-md">
                    <span className="text-lg font-semibold">Developer</span>
                    <div className="mt-4 flex justify-between gap-3 items-start flex-col md:flex-row md:items-center">
                      <div className="flex items-start gap-2">
                        <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center">
                          <span className="text-white font-semibold">SM</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm text-secondary font-semibold">PT. Suskses Indo Maju</span>
                          <span className="text-xs text-gray-400">Yogyakarta</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-green-600 border border-green-600 py-1.5 px-2 rounded-md">
                          <Image src={'/icons/wa_white.svg'} width={24} height={24} alt="" priority />
                          <span className="text-sm text-white">WhatsApp</span>
                        </button>
                        <button className="flex items-center gap-2 bg-white border border-primary py-1.5 px-2 rounded-md">
                          <Image src={'/icons/chat.svg'} width={24} height={24} alt="" priority />
                          <span className="text-sm text-primary">Chat</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Kelengkapan Rumah */}
                  <div className="mt-4 p-4 border rounded-md">
                    <span className="text-lg font-semibold">Kelengkapan Rumah</span>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/cooking.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Dapur</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/phone_1.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Jalur Telpon</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/lightning.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Jalur Listrik</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/living.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Ruang Keluarga</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/drop_water.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Jalur PDAM</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/laptop.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Ruang Kerja</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                    </div>
                  </div>
                  {/* Akses */}
                  <div className="mt-4 p-4 border rounded-md">
                    <span className="text-lg font-semibold">Akses</span>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/first_aid.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Rumah Sakit</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/shopping_bag.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Mall</span>
                        </div>
                        <span className="text-xs font-bold">Tidak</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/bus.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Jalan Tol</span>
                        </div>
                        <span className="text-xs font-bold">Tidak</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/train.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Stasiun</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/backpack.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Sekolah</span>
                        </div>
                        <span className="text-xs font-bold">Tidak</span>
                      </div>
                    </div>
                  </div>
                  {/* Fasilitas */}
                  <div className="mt-4 p-4 border rounded-md">
                    <span className="text-lg font-semibold">Fasilitas</span>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/swim.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Kolam Renang</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/club_house.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Club House</span>
                        </div>
                        <span className="text-xs font-bold">Ya</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/parking.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Tempat Parkir</span>
                        </div>
                        <span className="text-xs font-bold">Panas & Dingin</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/CCTV.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Keamanan</span>
                        </div>
                        <span className="text-xs font-bold">CCTV, One Gate</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 w-full md:w-1/2">
                          <Image src={'/icons/tree.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">Penghijauan</span>
                        </div>
                        <span className="text-xs font-bold">8m2</span>
                      </div>
                    </div>
                  </div>
                  {/* Informasi */}
                  <div className="mt-4 p-4 border rounded-md">
                    <span className="text-lg font-semibold">Informasi Properti</span>
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
                  </div>
                  {/* Alamat */}
                  <div className="mt-4 p-4 border rounded-md">
                    <span className="text-lg font-semibold">Alamat</span>
                    <div className="flex items-start gap-2 my-4">
                      <Image src={'/icons/pin_drop.svg'} width={24} height={24} alt="" priority />
                      <div className="text-sm text-gray-500">
                        Kaliurang St No.KM 9.5, Jaban, Sardonoharjo, Ngaglik, Sleman Regency, Special Region of Yogyakarta 55582
                      </div>
                    </div>
                    <Image src={'/dump/maps.png'} width={534} height={164} className=" object-cover" alt="" priority />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <button className="w-full bg-primary py-2.5 text-white font-semibold rounded-md">Ajukan Pembelian</button>
              <div className="mt-6 border rounded-md p-4">
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
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}