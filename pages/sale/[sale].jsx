import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";

export default function Detail() {
  return (
    <PageLayout>
      <div className="container flex flex-col items-center">
        <div className="w-full md:w-2/3 pt-7 pb-12">
          <div className="flex items-center">
            <Link>
              <Image />
              <span>Kembali Ke Pencarian</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3">asd</div>
      </div>
    </PageLayout>
  )
}