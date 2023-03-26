import React from 'react'

function Document() {
  return (
    <div className="mt-6 border rounded-md p-4 shadow">
      <div className="text-lg font-semibold text-primary-text">Dokumen</div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex justify-between items-end">
          <p className="font-normal text-base text-secondary-text">BPKB</p>
          <p className="font-semibold text-sm text-primary-text">21 HK</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Faktur</p>
          <p className="font-semibold text-sm text-primary-text">-</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Kuitansi</p>
          <p className="font-semibold text-sm text-primary-text">-</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Surat Pelepasan Hak</p>
          <p className="font-semibold text-sm text-primary-text">-</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">KTP Pemilik</p>
          <p className="font-semibold text-sm text-primary-text">Ada</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Form A</p>
          <p className="font-semibold text-sm text-primary-text">-</p>
        </div>
      </div>
    </div>
  )
}

export default Document