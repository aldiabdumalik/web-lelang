import React, { useState } from 'react'

const types = ['Properti', 'Otomotif', 'Mesin', 'Lainnya'];

function Tabbar() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div className="flex gap-x-4 c-tabs">
        {
          types.map(type => (
            <div className={"font-semibold text-white py-1 px-2 " + (active === type ? "active" : "")} key={type} onClick={() => setActive(type)}>{type}</div>
          ))
        }
      </div>
    </>
  )
}

export default Tabbar