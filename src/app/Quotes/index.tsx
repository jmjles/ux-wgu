import React, { useEffect, useState } from "react";
import anime from "animejs";
import quotes from "./quotes";

const Quotes = () => {
  const [quote, setQuote] = useState(0);
  useEffect(() => {
    const a = setInterval(() => {
      anime({
        targets: ".quote",
        opacity: 0,
        duration: 500,
        direction: "alternate",
        easing: "easeInOutSine",
      });
    }, 9500);
    const q = setInterval(() => {
      if (quote === quotes.length - 1) setQuote(0);
      else setQuote((pre) => pre + 1);
    }, 10000);
    return () => {
      clearInterval(q);
      clearInterval(a);
    };
  });
  return (
    <section>
      <p className="quote">&quot;{quotes[quote]}&quot;</p>
    </section>
  );
};

export default Quotes;
