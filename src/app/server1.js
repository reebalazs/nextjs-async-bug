import Client1 from "./client1";

export default function Server1({ children }) {
  console.log("Rendering Server1");
  return <Client1>{children}</Client1>;
}
