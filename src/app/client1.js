"use client";
import Context1 from "./context1";

export default function Client1({ data, children }) {
  console.log("Rendering Client1 with data", data);
  return (
    <Context1.Provider value={data}>
      <div>{children}</div>
    </Context1.Provider>
  );
}
