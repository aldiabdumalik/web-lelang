import Image from "next/image";
import Link from "next/link";
import {useState} from 'react';

function CollapseCard({title}) {
  const [ischecked, setIschecked] = useState(false);

  const handleChange = event => {
    setIschecked(event.target.checked);
  };
  return (
    <div className={"collapse border rounded-xl " + (ischecked ? "border-secondary" : "")}>
        <input type="checkbox" onChange={handleChange} /> 
        <div className="collapse-title flex justify-between gap-x-4 items-center">
          <p className="font-medium text-base">{title}</p>
          {
            !ischecked && 
            <Image src={"/img/icon/arrow-down-square.svg"} alt={"arrow"} width={0} height={0} className="w-7 sm:w-10 h-7 sm:h-10" />
          }
          {
            ischecked && 
            <Image src={"/img/icon/arrow-up-square.svg"} alt={"arrow"} width={0} height={0} className="w-7 sm:w-10 h-7 sm:h-10" />
          }
        </div>
        <div className="collapse-content"> 
          <div className="w-full h-2 border-b"></div>
          <p className="mt-4 font-normal text-base text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, It has survived not only five centuries,
          </p>
        </div>
    </div>
  )
}

export default CollapseCard