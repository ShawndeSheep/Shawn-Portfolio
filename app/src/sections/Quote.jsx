import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrambleSpan = ({ text, className, triggerRef }) => {
  const spanRef = useRef(null);
  const chars = "HSDJA";

  useEffect(() => {
    const element = spanRef.current;

    // Custom Scramble Logic
    const duration = 2; // Total duration
    const revealDelay = 0.5; // Delay before revealing starts

    let progress = { value: 0 };

    const context = gsap.context(() => {
      gsap.to(progress, {
        value: 1,
        duration: duration,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
        },
        onUpdate: () => {
          const p = progress.value;
          const revealProgress = Math.max(
            0,
            (p * duration - revealDelay) / (duration - revealDelay),
          );
          const numRevealed = Math.floor(revealProgress * text.length);

          const scrambled = text
            .split("")
            .map((char, i) => {
              if (i < numRevealed) return char;
              if (char === " ") return " ";
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          if (element) element.innerText = scrambled;
        },
      });
    });

    return () => context.revert();
  }, [text, triggerRef]);

  return (
    <span ref={spanRef} className={className}>
      {text
        .split("")
        .map((c) => (c === " " ? " " : "X"))
        .join("")}
    </span>
  );
};

const Quote = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-40 px-6 flex items-center justify-center min-h-[50vh]"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase"
          style={{ fontFamily: "serif" }}
        >
          <ScrambleSpan
            text="Good Business starts with "
            triggerRef={sectionRef}
          />
          <br className="md:hidden" />
          <ScrambleSpan
            text="Great Visions"
            className="text-purple-500 italic"
            triggerRef={sectionRef}
          />
        </h2>
      </div>
    </section>
  );
};

export default Quote;
