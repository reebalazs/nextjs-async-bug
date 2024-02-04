import { Suspense } from "react";
import Link from "next/link";
import Server1 from "./server1";

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <Server1>
        <div>XXX</div>
      </Server1>
      <Link href="sub">Go to sub...</Link>
    </Suspense>
  );
}
