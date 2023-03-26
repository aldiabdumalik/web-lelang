import { useState } from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Item from "@/components/Schedule/Item";
import Pagination from "@/components/Pagination";
import Tos from "@/components/Schedule/Tos";

export default function Schedule() {
  const [asset, setAsset] = useState('');
  const [month, setMonth] = useState('');
  const [location, setLocation] = useState('');

  const handleAsset = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setAsset(param);
  }
  const handleMonth = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setMonth(param);
  }
  const handleLocation = (param: string) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    setLocation(param);
  }

  return (
    <PageLayout>
      <div className="container mx-auto justify-center flex">
        <div className="my-6 w-full md:w-11/12">
          <div className="px-6 py-6 border rounded-md shadow-md md:px-12">
            <h1 className="text-xl font-semibold">Jadwal Lelang</h1>
            <div className="flex items-center flex-col gap-2 mt-4 md:flex-row">
              <div
                className="flex items-center justify-between cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown"
                tabIndex={0}
              >
                <span className="text-sm">{asset === '' ? 'Asset Lelang' : asset}</span>
                <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
                  style={{top: '45px', right: 0}}
                >
                  <li
                    className={asset === 'Lelang Rumah' ? 'bg-primary rounded-md text-white' : ''}
                    onClick={() => handleAsset('Lelang Rumah')}
                  >
                    <span className="text-sm active:bg-primary">Lelang Rumah</span>
                  </li>
                  <li
                    className={asset === 'Lelang Tanah' ? 'bg-primary rounded-md text-white' : ''}
                    onClick={() => handleAsset('Lelang Tanah')}
                  >
                    <span className="text-sm active:bg-primary">Lelang Tanah</span>
                  </li>
                </ul>
              </div>
              <div
                className="flex items-center justify-between cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown"
                tabIndex={0}
              >
                <span className="text-sm">{month === '' ? 'Bulan Lelang' : month}</span>
                <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
                  style={{top: '45px', right: 0}}
                >
                  <li
                    className={month === 'Bulan Lelang 2' ? 'bg-primary rounded-md text-white' : ''}
                    onClick={() => handleMonth('Bulan Lelang 2')}
                  >
                    <span className="text-sm active:bg-primary">Bulan Lelang 2</span>
                  </li>
                  <li
                    className={month === 'Bulan Lelang 3' ? 'bg-primary rounded-md text-white' : ''}
                    onClick={() => handleMonth('Bulan Lelang 3')}
                  >
                    <span className="text-sm active:bg-primary">Bulan Lelang 3</span>
                  </li>
                </ul>
              </div>
              <div
                className="flex items-center justify-between cursor-pointer border py-2.5 px-3.5 gap-2 rounded-md w-full dropdown"
                tabIndex={0}
              >
                <span className="text-sm">{location === '' ? 'Lokasi KPKNL' : location}</span>
                <Image src={'/icons/arrow_down.svg'} width={20} height={20} alt="" priority />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-full"
                  style={{top: '45px', right: 0}}
                >
                  <li
                    className={location === 'Lokasi KPKNL 2' ? 'bg-primary rounded-md text-white' : ''}
                    onClick={() => handleLocation('Lokasi KPKNL 2')}
                  >
                    <span className="text-sm active:bg-primary">Lokasi KPKNL 2</span>
                  </li>
                  <li
                    className={location === 'Lokasi KPKNL 3' ? 'bg-primary rounded-md text-white' : ''}
                    onClick={() => handleLocation('Lokasi KPKNL 3')}
                  >
                    <span className="text-sm active:bg-primary">Lokasi KPKNL 3</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center border py-2.5 px-3.5 rounded-md w-full">
                <input type="text" className="text-sm px-2 w-full md:w-96" placeholder={'Search'} />
                <div>
                  <Image src={'/img/icon/search-placeholder.svg'} width={16} height={16} alt="" priority />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <Item />
              <div className="mt-7">
                <Pagination pageLength={3} />
              </div>
            </div>
          </div>
          <div className="p-6 border rounded-md shadow-md mt-5">
            <Tos />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}