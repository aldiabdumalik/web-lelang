import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] })

export default function PageLayout(pageProps: PageLayoutProps) {
  const { children } = pageProps;

  return (
    <div className={inter.className}>
      <Head>
        <title>Info Lelang BRI</title>
      </Head>
      <Navbar />
      <div className="mt-14 sm:mt-0">
        {children}
      </div>
      <Footer />
    </div>
  )
}