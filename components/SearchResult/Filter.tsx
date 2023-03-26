import { useState } from "react";
import Image from "next/image";

export default function Filter() {
  const [sale, setSale] = useState('Beli');
  const [type, setType] = useState('Tipe 45');
  const [price, setPrice] = useState('Diatas 100JT');
  const [bedroom, setBedroom] = useState('1 KT');
  const [bathroom, setBathroom] = useState('1 KM');
  const [filter, setFilter] = useState('Terbesar');

  const handleSale = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setSale(param);
  }
  const handlePrice = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setPrice(param);
  }
  const handleType = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setType(param);
  }
  const handleBedroom = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setBedroom(param);
  }
  const handleBathroom = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setBathroom(param);
  }
  const handleFilter = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setFilter(param);
  }

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      {/* Search */}
      <div className="flex items-center justify-between cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full">
        <div className="flex items-center justify-between w-14 dropdown" tabIndex={0}>
          <span className="text-sm">{sale}</span>
          <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 top-0 w-48 rounded-md w-full"
            style={{top: '31px', left: '-13px', width: '150px'}}
          >
            <li
              className={sale === 'Beli' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleSale('Beli')}
            >
              <span className="text-sm active:bg-primary">Beli</span>
            </li>
            <li
              className={sale === 'Jual' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleSale('Jual')}
            >
              <span className="text-sm active:bg-primary">Jual</span>
            </li>
          </ul>
        </div>
        <input type="text" className="text-sm px-3 w-full md:w-80" placeholder={'Rumah'} />
        <div>
          <Image src={'/img/icon/search-placeholder.svg'} width={16} height={16} alt="" priority />
        </div>
      </div>
      {/* Price */}
      <div className="flex items-center cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown" tabIndex={0}>
        <Image src={'/icons/price_black.svg'} width={20} height={20} alt="" priority />
        <div className="w-full flex justify-between">
          <span className="text-sm">{price}</span>
          <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
            style={{top: '41px', right: 0}}
          >
            <li
              className={price === 'Diatas 100JT' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handlePrice('Diatas 100JT')}
            >
              <span className="text-sm active:bg-primary">Diatas 100JT</span>
            </li>
            <li
              className={price === 'Dibawah 100JT' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handlePrice('Dibawah 100JT')}
            >
              <span className="text-sm active:bg-primary">Dibawah 100JT</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Type */}
      <div className="flex items-center cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown" tabIndex={0}>
        <Image src={'/icons/home.svg'} width={20} height={20} alt="" priority />
        <div className="w-full flex justify-between">
          <span className="text-sm">{type}</span>
          <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
            style={{top: '41px', right: 0}}
          >
            <li
              className={type === 'Tipe 45' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleType('Tipe 45')}
            >
              <span className="text-sm active:bg-primary">Tipe 45</span>
            </li>
            <li
              className={type === 'Tipe 32' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleType('Tipe 32')}
            >
              <span className="text-sm active:bg-primary">Tipe 32</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bedroom */}
      <div className="flex items-center cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown" tabIndex={0}>
        <Image src={'/icons/bedroom_black.svg'} width={20} height={20} alt="" priority />
        <div className="w-full flex justify-between">
          <span className="text-sm">{bedroom}</span>
          <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
            style={{top: '41px', right: 0}}
          >
            <li
              className={bedroom === '1 KT' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleBedroom('1 KT')}
            >
              <span className="text-sm active:bg-primary">1 KT</span>
            </li>
            <li
              className={bedroom === '2 KT' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleBedroom('2 KT')}
            >
              <span className="text-sm active:bg-primary">2 KT</span>
            </li>
            <li
              className={bedroom === '3 KT' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleBedroom('3 KT')}
            >
              <span className="text-sm active:bg-primary">3 KT</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bathroom */}
      <div className="flex items-center cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown" tabIndex={0}>
        <Image src={'/icons/bathroom_black.svg'} width={20} height={20} alt="" priority />
        <div className="w-full flex justify-between">
          <span className="text-sm">{bathroom}</span>
          <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
            style={{top: '41px', right: 0}}
          >
            <li
              className={bathroom === '1 KM' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleBathroom('1 KM')}
            >
              <span className="text-sm active:bg-primary">1 KM</span>
            </li>
            <li
              className={bathroom === '2 KM' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleBathroom('2 KM')}
            >
              <span className="text-sm active:bg-primary">2 KM</span>
            </li>
            <li
              className={bathroom === '3 KM' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleBathroom('3 KM')}
            >
              <span className="text-sm active:bg-primary">3 KM</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Filter */}
      <div className="flex items-center cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown" tabIndex={0}>
        <Image src={'/icons/filter.svg'} width={20} height={20} alt="" priority />
        <div className="w-full flex justify-between">
          <span className="text-sm">{filter}</span>
          <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
            style={{top: '41px', right: 0}}
          >
            <li
              className={filter === 'Terbesar' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleFilter('Terbesar')}
            >
              <span className="text-sm active:bg-primary">Terbesar</span>
            </li>
            <li
              className={filter === 'Terkecil' ? 'bg-primary rounded-md text-white' : ''}
              onClick={() => handleFilter('Terkecil')}
            >
              <span className="text-sm active:bg-primary">Terkecil</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}