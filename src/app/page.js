import { Suspense } from "react";
import Link from "next/link";
import Server1 from "./server1";
import Server2 from "./server2";

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <Server1>
        <Server2 />
      </Server1>
      <Link href="sub">Go to sub...</Link>
    </Suspense>
  );
}
