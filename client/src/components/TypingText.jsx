import { useEffect, useState } from "react";

export default function TypingText({ text }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.substring(0, i + 1));
      i++;

      if (i >= text.length)
        clearInterval(interval);

    }, 70);

    return () => clearInterval(interval);

  }, [text]);

  return (
    <h1 className="text-6xl font-bold text-cyan-400">
      {display}
      <span className="animate-pulse">|</span>
    </h1>
  );
}