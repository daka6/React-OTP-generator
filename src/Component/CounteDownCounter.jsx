import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const CountDownCounter = ({ seconds }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count <= 0) {
      <Confetti />;
      return;
    }
    const timeout = setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
    console.log(count);
    return () => {
      clearTimeout(timeout);
    };
  }, [count]);
  return (
    <>
      <p id="otp-timer">Expires in: {count} seconds</p>
    </>
  );
};

export default CountDownCounter;
