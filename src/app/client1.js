"use client";

export default function Client1({ data, children }) {
  console.log("Rendering Client1");
  return <div>{children}</div>;
}
