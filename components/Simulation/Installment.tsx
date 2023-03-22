export default function Installment() {
  return (
    <div className="overflow-x-auto border-b">
      <table className="table table-compact w-full">
        <thead>
          <tr className="border-b">
            <th className="text-center bg-white">Bulan</th>
            <th className="bg-white">Sisa Pinjaman</th>
            <th className="bg-white">Porsi Pokok</th>
            <th className="bg-white">Porsi Bunga</th>
            <th className="bg-white">Angsuran</th>
            <th className="bg-white">Bunga</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(11)].fill(undefined).map((_, i) => {
            return (
              <tr key={i}>
                <th className="text-center">{i + 1}</th>
                <td>Rp937.570.600</td>
                <td>Rp937.570.600</td>
                <td>Rp2.911.000</td>
                <td>Rp4.372.800</td>
                <td>3.72%</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}