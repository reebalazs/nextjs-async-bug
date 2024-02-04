import Client1 from "./client1";

const waitMs = 2000;

const getData = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("DATA"), waitMs));

export default async function Server1({ children }) {
  console.log("Getting data for Server1");

  const data = await getData();
  console.log("Rendering Server1 with data", data);
  return <Client1 data={data}>{children}</Client1>;
}
