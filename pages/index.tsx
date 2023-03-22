import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const rts = useRouter();
  useEffect(() => { rts.replace('/home') }, []);
}
