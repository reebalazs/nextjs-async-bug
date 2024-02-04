"use client";
import Context1 from "./context1";
import { useContext } from "react";

export default function Client2({ children }) {
  console.log("In client2");
  const data = useContext(Context1);
  console.log("Rendering Client2 with data", data);
  return (
    <div>
      CLIENT2 data=<span>{data}</span>
    </div>
  );
}
