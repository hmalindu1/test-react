"use client";

import { useEffect, useState } from "react";

const Counter = () => {
  console.log("Counter render");
  const [seconds, setSeconds] = useState(0);

  // Count from 0 to 9, one tick per second, then stop
  useEffect(() => {
    if (seconds >= 9) return;
    const timer = setTimeout(() => setSeconds((s) => s + 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  return <p className="mt-4 font-mono text-4xl tabular-nums">{seconds}</p>;
};

export default Counter;
