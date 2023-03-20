import React from 'react'
import Image from "next/image";
import Link from "next/link";

function GuideCard({ icon, number, title, desc }) {
  return (
    <div className="flex flex-col w-full sm:w-271 bg-white p-6 rounded-xl">
        <div className="flex justify-between">
            <Image width={64} height={64} alt="icon-guide" src={icon} />
            <div className="text-xl font-semibold text-primary-30">{number}</div>
        </div>
        <div className="text-2xl font-bold text-primary mt-6">{title}</div>
        <div className="text-base font-normal text-neutral mt-2">{desc}</div>
    </div>
  )
}

export default GuideCard