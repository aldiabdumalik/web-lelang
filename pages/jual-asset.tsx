import React from 'react'
import PageLayout from '@/layouts/PageLayout'
import Image from 'next/image'

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
            {/* Form 1 */}
            <div id="form-1" className="hidden">
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
            </div>
            {/* Form 2 */}
            <div id="form-2" className="hidden">
              <div className="flex flex-col rounded-md border p-2 md:p-6 gap-y-4">
                <div className="flex gap-x-1 items-center">
                  <h4 className="font-semibold text-lg md:text-xl text-primary">Tipe Properti</h4>
                  <span className="text-base text-red-500">*</span>
                </div>
                <div className="flex flex-col md:flex-row items-center md:gap-x-4 asset-change">
                  <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2">
                    <input type="radio" name="radio-2" className="radio" />
                    <span className="text-primary-text">Apartement</span>
                  </div>
                  <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2 active">
                    <input type="radio" name="radio-2" className="radio" />
                    <span className="text-primary-text">Rumah</span>
                  </div>
                  <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2">
                    <input type="radio" name="radio-2" className="radio" />
                    <span className="text-primary-text">Ruko</span>
                  </div>
                  <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2">
                    <input type="radio" name="radio-2" className="radio" />
                    <span className="text-primary-text">Villa</span>
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <h4 className="font-semibold text-lg md:text-xl text-primary">Jenis Properti</h4>
                  <span className="text-base text-red-500">*</span>
                </div>
                <div className="flex flex-col md:flex-row items-center md:gap-x-4 asset-change">
                  <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2">
                    <input type="radio" name="radio-2" className="radio" />
                    <span className="text-primary-text">Subsidi</span>
                  </div>
                  <div className="flex items-center p-2 md:p-4 border rounded-md flex-1 gap-x-2 active">
                    <input type="radio" name="radio-2" className="radio" />
                    <span className="text-primary-text">Non-Subsidi</span>
                  </div>
                  {/* <div className="flex-1"></div>
                  <div className="flex-1"></div> */}
                </div>
                <div className="flex gap-x-1 items-center">
                  <h4 className="font-semibold text-lg md:text-xl text-primary">Lokasi Properti</h4>
                  <span className="text-base text-red-500">*</span>
                </div>
                <div className="h-14 grow bg-white rounded-md flex items-center text-base relative border">
                  <input type="text" placeholder="Cari nama lokasi, alamat atau kode pos"
                    className="input bg-transparent w-full pr-10" />
                  <Image src={"/img/icon/search-placeholder.svg"} width={0} height={0} className="w-6 h-6 absolute right-2" alt="arrow" />
                </div>
              </div>

            </div>
            {/* Form 3 */}
            <div id="form-1" className="">
              <div className="flex flex-col rounded-md border p-2 md:p-6 gap-y-4">
                <div className="flex gap-x-1 items-center">
                  <h4 className="font-semibold text-lg md:text-xl text-primary">Detail</h4>
                  <span className="text-base text-red-500">*</span>
                </div>
                <div className="flex flex-row items-start md:gap-x-4">
                  <div className="flex flex-col md:flex-row md:gap-x-4">
                    <div className="h-28 w-28">
                      <Image src={'/img/form/map.svg'} alt="map" width={0} height={0} object-fit={"contain"} className="md:w-28 md:h-28" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-base md:text-lg">Gondangdia Residence</p>
                      <p className="text-sm md:text-base font-normal text-secondary-text">Jl. Raya Gondangdia V <br/>Jakarta Pusat 54000</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary text-sm font-semibold">Edit</span>
                  </div>
                </div>
                <hr className="border border-neutral50" />
                <div className="flex flex-row items-center w-full">
                  <label className="font-semibold text-base text-primary-text w-52">Nama Properti</label>
                  <input type="text" className="input border border-neutral40 flex-1" placeholder="Nama Properti" />
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border p-2 md:p-6 gap-y-4">
              <div className="flex flex-row items-start w-full">
                <div className="flex items-center gap-x-1 w-52">
                  <label className="font-semibold text-xl text-primary">Deskripsi</label>
                  <span className="text-error">*</span>
                </div>
                <textarea className="textarea border border-neutral40 flex-1" placeholder="Tulis deskripsi properti"></textarea>
              </div>
            </div>

            <div className="flex flex-col rounded-md border p-2 md:p-6 gap-y-4">
              <div className="flex flex-col items-start w-full gap-y-4">
                <div className="flex items-center gap-x-1 w-52">
                  <label className="font-semibold text-xl text-primary">Detail Properti</label>
                  <span className="text-error">*</span>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center gap-x-2 w-52">
                    <p className="font-bold text-base text-neutral100">LT</p>
                    <p className="font-medium text-base text-primary-text">Luas Tanah</p>
                  </div>
                  <div className="flex items-center">
                    <input type="text" className="input border border-neutral40 rounded-tr-none rounded-br-none" placeholder="Masukan Luas Tanah" />
                    <div className="bg-neutral40 py-3 px-2.5 rounded-tr-md rounded-br-md text-tertiary">m2</div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center gap-x-2 w-52">
                    <p className="font-bold text-base text-neutral100">LB</p>
                    <p className="font-medium text-base text-primary-text">Luas Bangunan</p>
                  </div>
                  <div className="flex items-center">
                    <input type="text" className="input border border-neutral40 rounded-tr-none rounded-br-none" placeholder="Masukan Luas Bangunan" />
                    <div className="bg-neutral40 py-3 px-2.5 rounded-tr-md rounded-br-md text-tertiary">m2</div>
                  </div>
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