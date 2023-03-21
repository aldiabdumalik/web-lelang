import { useRouter } from "next/router";

export default function Purchase() {
  const rts = useRouter();

  return (
    <button
      className="w-full bg-primary py-2.5 text-white font-semibold rounded-md"
      onClick={() => rts.push(`/sale/${rts.query.sale}/calculator`)}
    >
      Ajukan Pembelian
    </button>
  )
}