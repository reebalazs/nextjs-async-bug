"use client";
import Context1 from "./context1";
import { useContext } from "react";

function wait(ms) {
  var start = Date.now(),
    now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

export default function Client2({ children }) {
  console.log("In client2");
  const data = useContext(Context1);
  console.log("Rendering Client2 with data", data);
  console.log("Calculate something expensive...");
  wait(4000);
  console.log("Finished expensive caltulation");
  return (
    <div>
      CLIENT2 data=<span>{data}</span>
    </div>
  );
}
