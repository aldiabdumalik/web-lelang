import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Halaman tidak ditemukan</title>
      </Head>
      <div className="flex w-full flex-col h-screen items-center justify-center gap-5">
        <span className="text-xl md:text-3xl font-semibold">404 | Halaman tidak ditemukan</span>
        <Link href={'/'} className="bg-primary text-white px-5 py-2 rounded-md font-semibold">Kembali ke Home</Link>
      </div>
    </>
  )
}