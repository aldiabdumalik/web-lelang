import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import useWindowSize from "@/plugins/window";

export default function Index() {
  const seg = useWindowSize()

  return (
    <PageLayout>
      <div className="relative jumbotron-wrapper">
        <div className="relative h-full h-96 md:h-auto z-0">
          <Image src='/homejumbo.png' width={seg.width} height={seg.height} className="h-96 md:h-auto object-cover" alt="jumbotron" />
        </div>
        <div className="absolute-center top-0 top-32 text-white z-10">
          <span className="font-bold text-3xl md:text-6xl">Temukan Rumah dan</span>
          <br />
          <span className="font-bold text-3xl md:text-6xl">Kendaraan Impianmu</span>
        </div>
      </div>
    </PageLayout>
  )
}
