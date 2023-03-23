import React, {useState} from 'react'
import Image from "next/image";
const obj = {
  types: ['Properti', 'Otomotif', 'Mesin', 'Lainnya'],
  locations: ['Semua', 'Bali', 'Jakarta', 'Jawa Barat'],
}
function DropdownIcon({icon, text, flag}) {
  const [active, setActive] = useState(obj[flag][0]);
  const handleClick = event => {
    const elem = document.activeElement;
    const value = event.target.attributes.value.value
    if(elem){
      elem?.blur();
    }

    setActive(value)
  }
  return (
    <div className="dropdown px-2">
        <div tabIndex={0} className="flex items-center gap-x-2">
            <Image src={icon} alt="icon" width={0} height={0} className="w-6 h-6" />
            <p className="text-xl font-medium text-primary-text">{active}</p>
            <Image src={"/img/icon/filter-arrow-down.svg"} alt="icon" width={0} height={0} className="w-6 h-6" />
        </div>
        <ul tabIndex={0} className="dropdown-content p-2 w-full sm:p-5 shadow bg-base-100 top-8 rounded-xl flex flex-col gap-y-4">
            {
              obj[flag].map(type => (
                <li className={"p-2 bg-white cursor-pointer text-sm font-normal " + (active === type ? "active" : "")} key={type} flag={flag} value={type} onClick={handleClick}>{type}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default DropdownIcon