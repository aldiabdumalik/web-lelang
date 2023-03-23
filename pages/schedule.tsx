import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Item from "@/components/Schedule/Item";
import Pagination from "@/components/Pagination";
import Tos from "@/components/Schedule/Tos";

export default function Schedule() {
  const handleAsset = () => {}
  const handleMonth = () => {}
  const handleLocation = () => {}

  return (
    <PageLayout>
      <div className="container mx-auto justify-center flex">
        <div className="my-6 w-full md:w-11/12">
          <div className="px-6 py-6 border rounded-md shadow-md md:px-12">
            <h1 className="text-xl font-semibold">Jadwal Lelang</h1>
            <div className="flex items-center flex-col gap-2 mt-4 md:flex-row">
              <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
                <select className="w-full text-sm" onChange={handleAsset}>
                  <option value="">Asset Lelang</option>
                  <option value="">Asset Lelang 2</option>
                </select>
              </div>
              <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
                <select className="w-full text-sm" onChange={handleMonth}>
                  <option value="">Bulan Lelang</option>
                  <option value="">Bulan Lelang 2</option>
                </select>
              </div>
              <div className="flex items-center border py-2.5 px-3.5 gap-2 rounded-md w-full">
                <select className="w-full text-sm" onChange={handleLocation}>
                  <option value="">Lokasi KPKNL</option>
                  <option value="">Lokasi KPKNL 2</option>
                </select>
              </div>
              <div className="flex items-center border py-2.5 px-3.5 rounded-md">
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