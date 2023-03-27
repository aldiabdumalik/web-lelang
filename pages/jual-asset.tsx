import React from 'react'
import PageLayout from '@/layouts/PageLayout'

function JualAsset() {
  return (
    <PageLayout>
        <div className="flex flex-col px-4 gap-y-14 lg:px-36  py-6 sm:py-24 w-full">
          <div className="flex items-center bg-neutral-20 p-6 rounded-md md:gap-x-4 asset-nav">
            <div className="flex flex-col md:flex-row gap-x-2 items-center md:flex-1 active">
              <div className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8 border-2 circle-number">1</div>
              <p className="font-medium text-base text-secondary-text">Pilih Asset</p>
              <hr className="border w-16" />
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 items-center md:flex-1">
              <div className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8 border-2 circle-number">2</div>
              <p className="font-medium text-base text-secondary-text">Alamat</p>
              <hr className="border w-16" />
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 items-center md:flex-1">
              <div className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8 border-2 circle-number">3</div>
              <p className="font-medium text-base text-secondary-text">Detail Asset</p>
              <hr className="border w-16" />
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 items-center md:flex-1">
              <div className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8 border-2 circle-number">4</div>
              <p className="font-medium text-base text-secondary-text">Tambahan</p>
              <hr className="border w-16" />
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 items-center md:flex-1">
              <div className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8 border-2 circle-number">5</div>
              <p className="font-medium text-base text-secondary-text">Upload Photo</p>
            </div>
          </div>

          <div className="form-sell flex flex-col gap-y-4 md:gap-y-6">
            <h4 className="font-bold text-2xl text-primary-text">Asset</h4>
            <p className="font-normal text-lg text-primary-text">Pilih asset yang akan di upload</p>
            <div className="flex flex-col rounded-md border p-2 md:p-6 gap-y-4">
              <div className="flex gap-x-1 items-center">
                <h4 className="font-semibold text-lg md:text-xl text-primary">Pilih Asset</h4>
                <span className="text-base text-red-500">*</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-x-4 asset-change">
                <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2">
                  <input type="radio" name="radio-1" className="radio" />
                  <span className="text-primary-text">Kendaraan</span>
                </div>
                <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2 active">
                  <input type="radio" name="radio-1" className="radio" checked />
                  <span className="text-primary-text">Properti</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-x-4">
              <div className="flex items-center justify-center cursor-pointer py-2.5 border border-primary rounded-md flex-1 gap-x-2">
                <span className="text-primary font-semibold">Kembali ke Home</span>
              </div>
              <div className="flex items-center justify-center cursor-pointer py-2.5 bg-primary rounded-md flex-1 gap-x-2">
                <span className="text-white font-semibold">Selanjutnya</span>
              </div>
            </div>
          </div>
        </div>
    </PageLayout>
  )
}

export default JualAsset