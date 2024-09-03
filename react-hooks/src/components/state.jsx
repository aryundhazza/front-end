import { useEffect, useState } from "react";

export default function StateComp() {
  const [count, setCount] = useState(0);

  //   setting jika butuh argument
  //   const increment = (num) => {
  //     setCount(count + num);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    document.title = `You cliked ${count} times`;
  });

  //   akan ikut dijalankan
  //   useEffect(() => {
  //     document.title = `You cliked ${count} times`;
  //   }, [count]);

  //     hanya dijalankan ketika pertama kali render saja
  //   useEffect(() => {
  //     document.title = `You cliked ${count} times`;
  //   }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      {/* jika butuh argumen
      <button onClick={() => increment}>increment</button> */}
    </div>
  );
}
