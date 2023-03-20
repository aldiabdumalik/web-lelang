import Image from "next/image";
import Link from "next/link";

function CollapseCard({title}) {
  return (
    <div className="collapse border peer-checked:bg-secondary rounded-xl">
        <input type="checkbox" /> 
        <div className="collapse-title flex justify-between items-center">
          <p className="font-medium text-base">{title}</p>
          <Image src={"/img/icon/arrow-down-square.svg"} alt={"arrow"} width={40} height={40} />
        </div>
        <div className="collapse-content peer-checked:bg-secondary"> 
          <div className="w-full h-2 border-b"></div>
          <p className="mt-4 font-normal text-base text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, It has survived not only five centuries,
          </p>
        </div>
    </div>
  )
}

export default CollapseCard