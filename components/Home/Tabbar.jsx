import React, { useState } from 'react'
import Image from "next/image";
import ReactSlider from 'react-slider'
import Link from 'next/link';
const types = ['Properti', 'Otomotif', 'Mesin', 'Lainnya'];

function Tabbar() {
  const [active, setActive] = useState(types[0]);
  const [location, setLocation] = useState('');
  const [tipe, setTipe] = useState('');
  const [merk, setMerk] = useState('');
  const [seri, setSeri] = useState('');
  const [price, setPrice] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [range, setRange] = useState([0, 10000]);

  const handleClick = event => {
    const elem = document.activeElement;
    const flag = event.target.attributes.flag.value
    const value = event.target.attributes.value.value
    if (flag == 'location') {
      setLocation(value)
    }else if (flag == 'tipe') {
      setTipe(value)
    }else if (flag == 'merk') {
      setMerk(value)
    }else if (flag == 'seri') {
      setSeri(value)
    }

    // hideDropdown
    if(elem){
      elem?.blur();
    }
  };
  const handleSlider = value => {
    // console.log(value)
    // setRange(value)
    setMinValue(value[0])
    setMaxValue(value[1])
  }
  const handleSavePrice = e => {
    const elem = document.activeElement;
    setPrice(`${minValue} - ${maxValue}`);
    if(elem){
      elem?.blur();
    }
  }

  return (
    <>
      <div className="flex gap-x-4 c-tabs">
        {
          types.map(type => (
            <div className={"font-semibold text-white py-1 px-2 " + (active === type ? "active" : "")} key={type} onClick={() => setActive(type)}>{type}</div>
          ))
        }
      </div>
      <hr className="border-black" />
      <div className="flex mt-6">
          <div className="flex property gap-x-4 w-full">
              <div className="h-14 grow bg-white rounded-md flex items-center text-base relative">
                <input type="text" placeholder="Cari berdasarkan lokasi, area sekitar, atau nama asset"
                  className="input bg-transparent w-full pl-10" />
                <Image src={"/img/icon/search-placeholder.svg"} width={0} height={0} className="w-6 h-6 absolute left-2" alt="arrow" />
              </div>
              <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                <div className="dropdown w-full relative">
                  <input type="text" placeholder="Lokasi" 
                    className="input bg-transparent w-full text-white placeholder:text-white cursor-pointer"
                    value={location} readOnly />
                  <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                  <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Semua" onClick={handleClick}>Semua</li>
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Bali" onClick={handleClick}>Bali</li>
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Jakarta" onClick={handleClick}>Jakarta</li>
                    <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="location" value="Jawa Barat" onClick={handleClick}>Jawa Barat</li>
                  </ul>
                </div>
              </div>
              { (active === 'Properti') && (
                <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                  <div className="dropdown w-full relative">
                    <input type="text" placeholder="Tipe" className="input bg-transparent w-full text-white placeholder:text-white cursor-pointer" value={tipe} readOnly />
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                    <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="tipe" value="Semua" onClick={handleClick}>Semua</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="tipe" value="Apartemen" onClick={handleClick}>Apartemen</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="tipe" value="Rumah" onClick={handleClick}>Rumah</li>
                    </ul>
                  </div>
                </div>
              )}
              { (active === 'Otomotif' || active === 'Mesin') && (
                <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                  <div className="dropdown w-full relative">
                    <input type="text" placeholder="Merk" className="input bg-transparent w-full text-white placeholder:text-white cursor-pointer" value={merk} readOnly />
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                    <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="merk" value="Semua" onClick={handleClick}>Semua</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="merk" value="Audi" onClick={handleClick}>Audi</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="merk" value="BMW" onClick={handleClick}>BMW</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="merk" value="Ford" onClick={handleClick}>Ford</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="merk" value="Honda" onClick={handleClick}>Honda</li>
                    </ul>
                  </div>
                </div>
              )}
              { (active === 'Otomotif') && (
                <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                  <div className="dropdown w-full relative">
                    <input type="text" placeholder="Seri" className="input bg-transparent w-full text-white placeholder:text-white cursor-pointer" value={seri} readOnly />
                    <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                    <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-12 rounded-xl flex flex-col gap-y-4">
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="seri" value="Semua" onClick={handleClick}>Semua</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="seri" value="APV" onClick={handleClick}>APV</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="seri" value="Balino" onClick={handleClick}>Balino</li>
                      <li className="p-2 bg-white cursor-pointer text-sm font-normal" flag="seri" value="Ertiga" onClick={handleClick}>Ertiga</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="h-14 flex-1 border rounded-md flex justify-center items-center text-base">
                <div className="dropdown w-full relative">
                  <input type="text" placeholder="Harga" 
                    className="input bg-transparent w-full text-white placeholder:text-white cursor-pointer"
                    value={price} readOnly />
                  <Image src={"/img/icon/arrow-dropdown.svg"} width={0} height={0} className="w-6 h-6 absolute top-15 inset-y-4 right-2" alt="arrow" />
                  <div tabIndex={0} className="dropdown-content w-96 md:w-451px p-2 sm:p-5 shadow bg-base-100 top-12 right-0 rounded-xl">
                    <div className="flex flex-col gap-y-4">
                      <ReactSlider
                          className="horizontal-slider"
                          thumbClassName="h-8 w-8 rounded-full bg-white flex items-center justify-center cursor-pointer top-2"
                          trackClassName="example-track"
                          defaultValue={[0, 10000]}
                          ariaLabel={['Lower thumb', 'Upper thumb']}
                          // ariaValuetext={state => `Thumb value ${state.valueNow}`}
                          renderThumb={(props, state) => <div {...props}>
                            <Image src={"/img/icon/slider-thumb.svg"} width={0} height={0} alt="icon" className="h-8 w-8" />
                          </div>}
                          pearling
                          minDistance={1000}
                          min={0}
                          max={10000}
                          onChange={handleSlider}
                          value={[minValue, maxValue]}
                      />
                      <div className="flex flex-col sm:flex-row gap-x-4 items-center justify-between">
                      <label className="block relative">
                        <div className="flex flex-col">
                          <span className="absolute inset-y-0 left-0 items-center px-2 mb-4">
                            <p className="text-gray-500 text-sm">Harga Min</p>
                          </span> 
                          <span className="absolute inset-y-0 left-0 items-center px-2 mt-8">
                            <p className="font-semibold">Rp</p>
                          </span>
                        </div>
                        <input type="number" 
                        className="border border-solid border-gray-300 w-36 rounded-md lg:pl-8 lg:pb-2 lg:pt-8 xs:pl-10 sm:text-sm lg:pr-2 font-semibold"
                        // defaultValue={range[0]}
                        min={0}
                        max={maxValue}
                        value={minValue}
                        onChange={(e) => setMinValue(e.target.value)} />
                      </label>
                      <label>-</label>
                      <label className="block relative">
                        <div className="flex flex-col">
                          <span className="absolute inset-y-0 left-0 items-center px-2 mb-4">
                            <p className="text-gray-500 text-sm">Harga Max</p>
                          </span> 
                          <span className="absolute inset-y-0 left-0 items-center px-2 mt-8">
                            <p className="font-semibold">Rp</p>
                          </span>
                        </div>
                        <input type="number" 
                        className="border border-solid border-gray-300 w-36 rounded-md lg:pl-8 lg:pb-2 lg:pt-8 xs:pl-10 sm:text-sm lg:pr-2 font-semibold"
                        // defaultValue={range[1]}
                        min={minValue}
                        max={10000}
                        value={maxValue}
                        onChange={(e) => setMaxValue(e.target.value)} />
                      </label>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center">
                        <p className="underline cursor-pointer text-sm font-medium text-tertiary" onClick={() => {setMinValue(0); setMaxValue(10000) }}>Reset</p>
                        <button type="button" className="btn bg-primary" onClick={handleSavePrice}>Simpan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={'/search/1'} className="h-14 flex-none px-8 bg-secondary rounded-md flex justify-center items-center text-white text-base">Cari</Link>
          </div>
      </div>
    </>
  )
}

export default Tabbar