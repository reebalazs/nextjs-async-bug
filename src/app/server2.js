import Client2 from "./client2";

export default function Server2({ children }) {
  console.log("Rendering Server2");
  return <Client2>{children}</Client2>;
}
