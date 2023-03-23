import Image from "next/image";

export default function Otomotif() {
  const handleSale = () => {}
  const handlePrice = () => {}
  const handleType = () => {}
  const handleBedroom = () => {}
  const handleBathroom = () => {}
  const handleFilter = () => {}

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      {/* Search */}
      <div className="flex items-center border py-2.5 px-3.5 rounded-md">
        <select className="" onChange={handleSale}>
          <option value="buy">Beli</option>
          <option value="sell">Jual</option>
        </select>
        <input type="text" className="px-3 w-full md:w-80" placeholder={'Mobil'} />
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
        <Image src={'/img/icon/car-dropdown.svg'} width={20} height={20} alt="dropdown" priority />
        <select className="w-full" onChange={handleType}>
          <option value="">Tipe Kendaraan</option>
        </select>
      </div>
      {/* Bedroom */}
      <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
        <Image src={'/img/icon/year-dropdown.svg'} width={20} height={20} alt="" priority />
        <select className="w-full" onChange={handleBedroom}>
          <option value="">Tahun</option>
        </select>
      </div>
      {/* Bathroom */}
      <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
        <Image src={'/img/icon/transmisi-dropdown.svg'} width={20} height={20} alt="" priority />
        <select className="w-full" onChange={handleBathroom}>
          <option value="">Transmisi</option>
        </select>
      </div>
      {/* Filter */}
      <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
        <Image src={'/icons/filter.svg'} width={20} height={20} alt="" priority />
        <select className="w-full" onChange={handleFilter}>
          <option value="">Filter</option>
        </select>
      </div>
    </div>
  )
}