import PageLayout from '@/layouts/PageLayout'
import React from 'react'

function Procedure() {
  return (
    <PageLayout>
        <div className="flex flex-col px-4 lg:px-36 py-6 gap-y-4 sm:py-18">
            <h3 className="font-semibold text-2xl lg:text-4xl text-primary">Prosedur Info Lelang BRI</h3>
            <div className="rounded-md border p-8">
                <ol className="list-decimal">
                    <li className="text-base font-medium">Cari aset sesuai lokasi, harga dan preferensi keinginanmu. Dapat dengan melakukan cari berdasarkan lokasi, area sekitar atau nama aset.</li>
                    <li className="text-base font-medium">Pilih asset yang diinginkan, akan muncul detail aset berupa foto, deskripsi, informasi kelengkapan rumah, akses dan fasilitas, lokasi yang dapat diklik ke Google Maps, nomor HP petugas BRI dan kalkulator KPR.</li>
                    <li className="text-base font-medium">Untuk mengetahui lokasi dan kondisi aset dapat menghubungi lebih lanjut petugas BRI yang mengelola aset tersebut, dimana nomor Whatsapp dapat secara langsung diklik di halaman aset.</li>
                    <li className="text-base font-medium">Penjualan aset secara umum berupa penjualan damai dan atau melalui mekanisme lelang.</li>
                    <li className="text-base font-medium">
                        Lelang adalah penjualan aset yang terbuka untuk umum dengan penawaran harga secara tertulis dan atau lisan yang semakin meningkat atau menurun untuk mencapai harga tertinggi yang didahului dengan Pengumuman Lelang. Aset yang diinformasikan dengan status dilelang adalah aset yang transaksi jual belinya dilakukan dengan mekanisme lelang sesuai ketentuan di link berikut: https://lelang.go.id/page/syarat-dan-ketentuan
                    </li>
                    <li className="text-base font-medium">
                        Apabila pada detail asset lelang sudah terdapat link lelang online, maka calon pembeli dapat melanjutkan ke mekanisme lelang online di lelang.go.id dengan terlebih dahulu sudah melakukan registrasi dan aktivasi sesuai syarat dan ketentuan.
                    </li>
                    <li className="text-base font-medium">
                        Penjualan damai merupakan mekanisme penjualan aset yang transaksi jual belinya dilakukan melalui mekanisme jual beli secara langsung oleh pemilik aset berdasarkan kesepakatan antara pemilik aset dengan calon pembeli.
                    </li>
                    <li className="text-base font-medium">Pastikan dokumen aset tersebut sudah sesuai dan valid.</li>
                    <li className="text-base font-medium">Melakukan pelunasan dan melengkapi berkas sesuai ketentuan.</li>
                </ol>
            </div>
        </div>
    </PageLayout>
  )
}

export default Procedure