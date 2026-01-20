import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroImg from "../assets/hero.png";

const Hero = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imageRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
    )
      .fromTo(
        text1Ref.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "expo.out" },
        "-=1.0",
      )
      .fromTo(
        text2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=1.2",
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8",
      );

    return () => tl.kill();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen mt-10 flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 px-4 -mb-40 md:-mb-20 lg:-mb-10"
    >
      <p
        className="text-[max(1.2vw,18px)] mb-2 italic"
        style={{ fontFamily: "ui-serif" }}
      >
        Hi👋, my name is Shawn Davies and I'm a
      </p>
      {/* Top Text */}
      <h1
        ref={text1Ref}
        className="text-[13vw] leading-[0.85] text-black text-center z-10 select-none"
      >
        FULLSTACK
      </h1>

      {/* Bottom Text - Outlined */}
      <h1
        ref={text2Ref}
        className="text-[10vw] leading-[0.85] text-stroke text-center z-0 select-none"
      >
        & ML ENGINEER
      </h1>
      {/* Hero Image */}
      <div className="relative -mt-[10vw] -mb-[4vw] w-[90vw] max-w-[600px] aspect-4/5 md:aspect-square">
        <img
          ref={imageRef}
          src={HeroImg}
          alt="Shawn Davies"
          className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
};

export default Hero;
