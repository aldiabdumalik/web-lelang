import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";

export default function SearchQuery() {
  const handleSale = () => {}
  const handlePrice = () => {}
  const handleType = () => {}
  const handleBedroom = () => {}
  const handleBathroom = () => {}
  const handleFilter = () => {}

  return (
    <PageLayout>
      <div className="py-6">
        <div className="mx-3 md:mx-6">
          <div className="flex items-center gap-4 flex-col md:flex-row">
            {/* Search */}
            <div className="flex items-center border py-2.5 px-3.5 rounded-md">
              <select className="" onChange={handleSale}>
                <option value="buy">Beli</option>
                <option value="sell">Jual</option>
              </select>
              <input type="text" className="px-3 w-full md:w-80" placeholder={'Rumah'} />
              <div>
                <Image src={'/img/icon/search-placeholder.svg'} width={16} height={16} alt="" priority />
              </div>
            </div>
            {/* Price */}
            <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
              <Image src={'/icons/price_black.svg'} width={20} height={20} alt="" priority />
              <select className="w-full" onChange={handlePrice}>
                <option value="">Diatas 100JT</option>
                <option value="">Dibawah 100JT</option>
              </select>
            </div>
            {/* Type */}
            <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
              <Image src={'/icons/home.svg'} width={20} height={20} alt="" priority />
              <select className="w-full" onChange={handleType}>
                <option value="">Tipe 45</option>
                <option value="">Tipe 32</option>
              </select>
            </div>
            {/* Bedroom */}
            <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
              <Image src={'/icons/bedroom_black.svg'} width={20} height={20} alt="" priority />
              <select className="w-full" onChange={handleBedroom}>
                <option value="">1 KT</option>
                <option value="">2 KT</option>
                <option value="">3 KT</option>
              </select>
            </div>
            {/* Bathroom */}
            <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
              <Image src={'/icons/bathroom_black.svg'} width={20} height={20} alt="" priority />
              <select className="w-full" onChange={handleBathroom}>
                <option value="">1 KM</option>
                <option value="">2 KM</option>
                <option value="">3 KM</option>
              </select>
            </div>
            {/* Filter */}
            <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
              <Image src={'/icons/filter.svg'} width={20} height={20} alt="" priority />
              <select className="w-full" onChange={handleFilter}>
                <option value="">Terbesar</option>
                <option value="">Terkecil</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border my-5"></div>
        <div className="mx-3 md:mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[...Array(10)].fill(undefined).map((_, i) => {
              return (
                <div className="flex flex-col gap-6 py-6 px-0 md:px-6 md:flex-row" key={i}>
                  <div className="relative">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src={i % 2 == 0 ? '/dump/detail-1.png' : '/dump/detail-2.png'}
                        width={256}
                        height={248}
                        className="w-full h-64 object-cover md:w-64"
                        alt=""
                        priority
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <button className="bg-white flex items-center gap-2 px-2 py-2.5 rounded-md border shadow-md">
                        <Image src={'/icons/cube_3d.svg'} width={20} height={20} alt="" priority />
                        <span className="text-primary text-xs font-semibold">Virtual 360</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs text-primary font-semibold py-1 px-2 bg-blue-100 rounded-md">Rumah</span>
                      <span className="text-xs text-primary font-semibold py-1 px-2 bg-blue-100 rounded-md">Tipe 45</span>
                    </div>
                    <h3 className="text-lg font-semibold leading-5">AURORA Bukit Rancamaya Residence Permai</h3>
                    <span className="text-sm text-gray-400 leading-6">Jakarta Utara, DKI Jakarta</span>
                    <h2 className="text-xl font-bold text-primary mt-4">Rp1.200.000.000</h2>
                    <div className="text-sm mt-5">
                      Developer: <span className="text-secondary font-bold">Kawan Lama Properti</span>
                    </div>
                    <div className="mt-2 border rounded-md border-primary overflow-hidden">
                      <div className="p-2.5 flex justify-between">
                        <div className="flex items-center gap-2">
                          <Image src={'/icons/bedroom.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">2 KT</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image src={'/icons/bathroom.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">2 KM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image src={'/icons/garage.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">2 Parkir</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image src={'/icons/LB.svg'} width={20} height={20} alt="" priority />
                          <span className="text-xs">100 m2</span>
                        </div>
                      </div>
                      <div className="border-t border-primary p-2.5 bg-blue-100">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-semibold">
                            <span className="mr-1">KPR mulai dari</span>
                            <span className="text-sm font-bold text-primary">3.600.000/bulan</span>
                          </div>
                          <div className="text-xs font-semibold">
                            <span className="mr-1">Suku Bunga</span>
                            <span className="text-sm font-bold text-primary">3.50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 cursor-pointer">
                      <Image src={'/icons/love_orange.svg'} width={28} height={28} alt="" priority />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}