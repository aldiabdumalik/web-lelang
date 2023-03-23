// import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
        <div className="flex flex-col bottom-0 p-8 gap-y-6 sm:gap-y-0 lg:px-34 sm:py-12 sm:gap-x-4 sm:flex-row w-full bg-primary">
            <div className="flex flex-col flex-1">
            <h4 className="text-2xl font-semibold text-white">Kantor Pusat</h4>
            <div className="flex flex-col mt-8">
                <p className='text-white text-base font-normal'>
                    PT. Bank Rakyat Indonesia (Persero) Tbk.
                </p>
                <p className='text-white text-base font-normal mt-8'>
                    Gedung BRI Jl. Jenderal Sudirman Kav.44-46 Jakarta 10210 Indonesia
                </p>
            </div>
            </div>
            <div className="flex flex-col flex-1">
            <h4 className="text-2xl font-semibold text-white">Hubungi Kami</h4>
            <div className="flex flex-col gap-y-4 mt-8">
                <div className="flex items-center gap-x-1">
                    <Image width={24} height={24} src='/img/icon/telephone.svg' alt='telephone' />
                    <p className="text-white text-base font-normal">14017 / 1500017</p>
                </div>
                <div className="flex items-center gap-x-1">
                    <Image width={24} height={24} src='/img/icon/email.svg' alt='email' />
                    <p className="text-white text-base font-normal">callbri@bri.co.id</p>
                </div>
                <div className="flex items-center gap-x-4">
                    <Image width={24} height={24} src='/img/icon/ig.svg' alt='ig' />
                    <Image width={24} height={24} src='/img/icon/fb.svg' alt='fb' />
                    <Image width={24} height={24} src='/img/icon/yt.svg' alt='yt' />
                    <Image width={24} height={24} src='/img/icon/twit.svg' alt='twit' />
                </div>
            </div>
            </div>
            <div className="flex flex-col flex-1">
            <h4 className="text-2xl font-semibold text-white">Tautan</h4>
            <div className="flex flex-col gap-y-4 mt-8">
                <div className="text-white text-base font-normal">Produk BRI</div>
                <div className="text-white text-base font-normal">Deposit Interest</div>
                <div className="text-white text-base font-normal">Rates</div>
                <div className="text-white text-base font-normal">Loan Interest Rates</div>
                <div className="text-white text-base font-normal">Fees & Rates</div>
                <div className="text-white text-base font-normal">Whistleblowing System</div>
                <div className="text-white text-base font-normal">Karier</div>
            </div>
            </div>
            <div className="flex flex-col flex-1 gap-y-4">
                <h4 className="text-2xl font-semibold text-white">Powered and supported by</h4>
                <div className="flex flex-col gap-y-4">
                    <div className="">
                        <Image width={124} height={44} src='/img/footer/bri.svg' alt='bri' />
                    </div>
                    <div className="flex gap-x-2">
                        <Image width={120} height={50} src='/img/footer/lelang.svg' alt='lelang' />
                        <Image width={120} height={50} src='/img/footer/raya.svg' alt='raya' />
                    </div>
                </div>
                <h4 className="text-2xl font-semibold text-white">Terdaftar & diawasi oleh:</h4>
                <Image width={144} height={54} src='/img/footer/ojk.svg' alt='ojk' className="w-36" />
            </div>
        </div>
    </>
  )
}

export default Footer