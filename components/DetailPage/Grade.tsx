import React from 'react'

function Grade() {
  return (
    <div className="mt-6 border rounded-md p-4 shadow">
      <div className="text-lg font-semibold text-primary-text">Grade</div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex justify-between items-end">
          <p className="font-normal text-base text-secondary-text">Interior</p>
          <p className="font-semibold text-sm text-primary-text">C</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Eksterior</p>
          <p className="font-semibold text-sm text-primary-text">C</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Rangka</p>
          <p className="font-semibold text-sm text-primary-text">B</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-normal text-base text-secondary-text">Mesin</p>
          <p className="font-semibold text-sm text-primary-text">A</p>
        </div>
      </div>
    </div>
  )
}

export default Grade