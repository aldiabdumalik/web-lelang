import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header'
import GuideCard from '@/components/Card/GuideCard'
import Image from "next/image";
import Link from "next/link";
import React from 'react'

function Home() {
  return (
    <PageLayout>
        <Header />
        <div className="w-full h-384px bg-white"></div>

        <div className="flex flex-col px-4 sm:px-36 py-6 sm:py-18 gap-y-6 w-full min-h-552px bg-neutral-20">
          <h4 className="font-bold text-40 text-primary">Bagaimana Sistem Infolelang?</h4>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <p className="text-lg font-normal ">Berikut adalah panduan singkat bagaimana kamu bisa mendapatkan properti atau kendaraan impianmu</p>
                <Link href={"/"}>
                    <div className="hidden sm:flex sm:gap-x-4 items-center">
                        <p className="text-lg font-normal text-secondary">Lihat Selengkapnya </p>
                        <Image src={"/img/icon/arrow-right.svg"} alt="arrow-right" width={10} height={17} />
                    </div>
                </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-x-6 items-center w-full mt-6">
            <GuideCard 
                icon={"/img/icon/search-square.svg"} 
                number={"01"} title={"Cari Aset"} 
                desc={"Cari asset sesuai lokasi dan harga keinginanmu"} />
            <GuideCard 
                icon={"/img/icon/hand-square.svg"} 
                number={"02"} title={"Pilih Aset"} 
                desc={"Pilih asset yang ingin kamu beli"} />
            <GuideCard 
                icon={"/img/icon/calc-square.svg"} 
                number={"03"} title={"Kalkulasi KPR"} 
                desc={"Simulasikan KPR kamu dengan fitur kalkulator KPR"} />
            <GuideCard 
                icon={"/img/icon/emot-square.svg"} 
                number={"04"} title={"Ajukan KPR"} 
                desc={"Ajukan KPR asset sesuai kemampuan kamu"} />
          </div>
          <div className="flex justify-center sm:hidden gap-x-2 sm:gap-x-4 items-center">
              <p className="text-lg font-normal text-secondary">Lihat Selengkapnya </p>
              <img src="/img/icon/arrow-right.svg" width={10} />
            </div>
        </div>
    </PageLayout>
  )
}

export default Home;