import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/SaleDetailPage/Gallery";
import Price from "@/components/SaleDetailPage/Price";
import Description from "@/components/SaleDetailPage/Description";
import Completeness from "@/components/SaleDetailPage/Info/Completeness";
import Access from "@/components/SaleDetailPage/Info/Access";
import Facility from "@/components/SaleDetailPage/Info/Facility";
import Information from "@/components/SaleDetailPage/Info/Information";
import Address from "@/components/SaleDetailPage/Info/Address";
import Schedule from "@/components/SaleDetailPage/Schedule";
import Calculator from "@/components/SaleDetailPage/Calculator";
import Purchase from "@/components/SaleDetailPage/Purchase";

export default function Detail({response}) {
  const description = {
    title: response.title,
    location: response.location.label,
    facility: response.facility,
    description: response.description
  }

  return (
    <PageLayout>
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-2/3 pt-7 pb-8">
          <div className="flex justify-between gap-5 flex-col items-start md:flex-row md:items-center">
            <Link href={'/'} className="flex items-center gap-2">
              <Image src={'/icons/arrow_back.svg'} width={20} height={20} alt="" priority />
              <span className="text-sm font-semibold text-primary">Kembali Ke Pencarian</span>
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs text-gray-400">Home</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-gray-400">Yogyakarta</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-gray-400">Sleman</span>
              <Image src={'/icons/arrow_right.svg'} width={16} height={16} alt="" priority />
              <span className="text-xs text-secondary font-semibold">{response.title}</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <Gallery />
        </div>
        <div className="w-full md:w-2/3 mt-8 pb-7">
          <div className="flex items-start gap-10 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full">
              <div className="relative">
                <Price price={response.price} />
                <Description data={description} />
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
                  <Completeness />
                  <Access />
                  <Facility />
                  <Information />
                  <Address />
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="w-full md:w-6/12">
              <Purchase />
              <Schedule />
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const http = await fetch(`${process.env.HOST}/sample/data_detail.json`);
  const dataJson = await http.json();

  return {
    props: {
      response: dataJson
    }
  };
}