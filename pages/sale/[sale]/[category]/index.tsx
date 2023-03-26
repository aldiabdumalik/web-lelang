import { useState } from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { 
  Gallery, 
  Price, 
  Description, 
  Completeness, 
  Access, 
  Facility, 
  Information, 
  Address, 
  Schedule, 
  Calculator, 
  Document, 
  Grade 
} from "@/components/DetailPage/"
import ButtonAction from "@/components/ButtonAction";
import PurchaseType from "@/components/Purchase/PurchaseType";

interface DetailProps {
  response: any;
}

export default function Detail({response}: DetailProps) {
  const router = useRouter()
  const [openPurchase, setOpenPurchase] = useState(false);

  const description = {
    title: response.title,
    location: response.location.label,
    facility: response.facility,
    description: response.description,
    gallery: response.images,
    router: router,
    category: router.query.category
  }

  function cbPurchase() {
    setOpenPurchase(true);
  }

  return (
    <PageLayout>
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-2/3 pt-7 pb-8">
          <div className="flex justify-between gap-5 flex-col items-start md:flex-row md:items-center">
            <Link href={'/search/' + description.category} className="flex items-center gap-2">
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
          <Gallery images={description.gallery} />
        </div>
        <div className="w-full md:w-2/3 mt-8 pb-7">
          <div className="flex items-start gap-10 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full">
              <div className="relative">
                <Price price={response.price} />
                <Description data={description} />
                <div className="mt-12">
                  { router.query.category === "properti" && (
                    <>
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
                    </>
                  ) }
                  <Information category={description.category} />
                  <Address />
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="w-full md:w-6/12">
              {router.query.category == 'properti' && (
                <ButtonAction
                  label={"Ajukan Pembelian"}
                  style={"block text-center cursor-pointer bg-primary py-2.5 text-white font-semibold rounded-md mb-6"}
                  callback={cbPurchase}
                />
              )}
              <Schedule />
              { router.query.category === "properti" && (
                <Calculator />
              )}
              { router.query.category === "otomotif" && (
                <>
                <Document />
                <Grade />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {openPurchase && <PurchaseType toggle={openPurchase} onClose={(_: boolean) => setOpenPurchase(_)} />}
    </PageLayout>
  )
}

export async function getServerSideProps({params}:any) {
  const { category, sale } = params
  const http = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/detail/products/${sale}/${category}`);
  const dataJson = await http.json();
  return {
    props: {
      response: dataJson
    }
  };
}