import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header'
// import GuideCard from '@/components/Card/GuideCard'
// import CollapseCard from '@/components/Card/CollapseCard'
import { GuideCard, CollapseCard, TestiCard, DropdownIcon } from '@/components/Card/'
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import Product from "@/components/Card/Product";

function Home() {
  return (
    <PageLayout>
      <Header />
      {/* Sale */}
      <div className="flex flex-col px-4 lg:px-36 py-6 sm:py-24 gap-y-6 w-full">
        <h4 className="font-bold text-2xl sm:text-40 text-primary">Lelang Terbaru</h4>
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-4 sm:gap-x-16">
            <DropdownIcon icon={"/img/icon/filter-menu.svg"} text={"Properti"} flag={"types"} />
            <DropdownIcon icon={"/img/icon/filter-location.svg"} text={"Semua"} flag={"locations"} />
          </div>
          <div className="flex items-center sm:gap-x-4 justify-between sm:justify-start">
            <Link href={'/search/1'} className="underline text-secondary text-sm sm:text-base font-medium cursor-pointer">Lihat Lebih Banyak</Link>
            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <Image src={"/img/icon/arrow-left-square.svg"} alt="icon" width={0} height={0} className="w-7 sm:w-10 h-7 sm:h-10" />
              <Image src={"/img/icon/arrow-right-square.svg"} alt="icon" width={0} height={0} className="w-7 sm:w-10 h-7 sm:h-10" />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Product
            title="Rumah Minimalis Green Residence 1"
            location="Sleman, Yogyakarta"
            image="/dump/cardhomeimage.png"
          />
          <Product
            title="Rumah Minimalis Green Residence 2"
            location="Sleman, Yogyakarta"
            image="/dump/cardhomeimage.png"
          />
          <Product
            title="Rumah Minimalis Green Residence 3"
            location="Sleman, Yogyakarta"
            image="/dump/cardhomeimage.png"
          />
          <Product
            title="Rumah Minimalis Green Residence 4"
            location="Sleman, Yogyakarta"
            image="/dump/cardhomeimage.png"
          />
        </div>
      </div>
      {/* Info Guide */}
      <div className="flex flex-col px-4 lg:px-36 py-6 sm:py-18 gap-y-6 w-full min-h-552px bg-neutral-20">
        <h4 className="font-bold text-2xl sm:text-40 text-primary">Bagaimana Sistem Infolelang?</h4>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <p className="text-lg font-normal text-primary-text ">Berikut adalah panduan singkat bagaimana kamu bisa mendapatkan properti atau kendaraan impianmu</p>
          <Link href={"/"} className="hidden sm:flex sm:gap-x-4 items-center">
            <p className="text-sm lg:text-lg font-normal text-secondary">Lihat Selengkapnya </p>
            <Image src={"/img/icon/arrow-right.svg"} alt="arrow-right" width={10} height={17} />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 md:gap-x-4 lg:gap-x-6 items-center w-full mt-6">
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
        <Link href={"/"} className="flex justify-center sm:hidden gap-x-2 sm:gap-x-4 items-center">
          <p className="text-lg font-normal text-secondary">Lihat Selengkapnya </p>
          <Image src={"/img/icon/arrow-right.svg"} alt="arrow-right" width={10} height={17} />
        </Link>
      </div>
      {/* Quetion */}
      <div className="flex flex-col w-full gap-y-12 sm:gap-y-12 px-4 lg:px-36 py-6 sm:py-18 bg-white">
        <h4 className="text-primary font-bold text-2xl sm:text-40">Frequently Asked Question</h4>
        <div className="flex flex-col gap-y-4">
          <CollapseCard title={"Informasi apa sajakah yang disajikan dalam website info lelang BRI ini?"} />
          <CollapseCard title={"Bagaimana cara mengikuti lelang di Infolelang BRI?"} />
          <CollapseCard title={"Siapakah pihak penjual dalam penjualan dengan mekanisme lelang?"} />
          <CollapseCard title={'Apa yang dimaksud dengan status "dilelang"?'} />
          <CollapseCard title={'Apa yang dimaksud dengan status "dijual damai"?'} />
          <CollapseCard title={"Siapakah pihak penjual dalam penjualan dengan mekanisme lelang?"} />
        </div>
      </div>
      {/* Testimoni */}
      <div className="flex flex-col w-full flex flex-col sm:h-644px bg-neutral-20 px-4 lg:px-36 py-6 sm:py-18 gap-y-6">
        <h4 className="text-primary font-bold text-2xl sm:text-40">Apa Kata Mereka tentang Infolelang?</h4>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <p className="text-sm sm:text-lg font-normal text-primary-text">Testimoni mereka yang telah menggunakan infolelang</p>
          <Link href={"/"} className="hidden sm:flex sm:gap-x-4 items-center">
            <p className="text-lg font-normal text-secondary">Lihat Selengkapnya </p>
            <Image src={"/img/icon/arrow-right.svg"} alt="arrow-right" width={10} height={17} />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 lg:gap-x-6">
          <TestiCard
            text={"Saya sangat senang mengikuti lelang di infolelang BRI, lorem ipsum sir dolor lorem ipsum sir Overall barangnya sangat memuaskan!"}
            name={"Sofia"}
            status={"Striker"} />
          <TestiCard
            text={"Saya sangat senang mengikuti lelang di infolelang BRI, lorem ipsum sir dolor lorem ipsum sir Overall barangnya sangat memuaskan!"}
            name={"Aldi"}
            status={"Goal Keeper"} />
          <TestiCard
            text={"Saya sangat senang mengikuti lelang di infolelang BRI, lorem ipsum sir dolor lorem ipsum sir Overall barangnya sangat memuaskan!"}
            name={"Citra"}
            status={"Midfielder"} />
        </div>
        <div className="flex w-full justify-between items-center gap-x-2">
          <div className="relative w-full">
            <div className="border-2 w-full" ></div>
            <hr className="border-2 border-secondary w-1/2 absolute top-0" />
          </div>
          <div className="flex items-center sm:gap-x-4">
            <Image src={"/img/icon/arrow-left-square.svg"} alt="icon" width={0} height={0} className="w-7 sm:w-10 h-7 sm:h-10" />
            <Image src={"/img/icon/arrow-right-square.svg"} alt="icon" width={0} height={0} className="w-7 sm:w-10 h-7 sm:h-10" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home;