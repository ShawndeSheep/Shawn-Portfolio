import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Dynamically load all images from assets
const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const getImagePath = (filename) => {
  const key = `../assets/${filename}`;
  return images[key]?.default;
};

const clients = [
  { name: "INDORAYA", file: "indoraya.png" },
  { name: "Wings Surya", file: "wings.png" },
  { name: "Lumina Eka Optima", file: "lumina.png" },
  { name: "Cahaya Medika", file: "cahaya.png" },
  { name: "BiliBrain", file: "bilibrain.png" },
  { name: "Google", file: "google.png" },
  { name: "MODCUS AI", file: "modcus.png" },
  { name: "GOJEK", file: "gojek.png" },
  { name: "RS UNAIR", file: "unair.png" },
];

const WorkedWith = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Create seamless loop animation
    // Move -33.33% because we have 3 sets of clients, so 1 set is 33.33%
    tweenRef.current = gsap.to(slider, {
      xPercent: -33.33,
      repeat: -1,
      duration: 30, // Adjust speed here
      ease: "none",
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  return (
    <section className="bg-black py-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-white text-4xl font-bold tracking-wide text-center">
          Worked With
        </h1>
      </div>

      <div
        ref={sliderRef}
        className="flex w-max gap-8 items-center cursor-default px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Triple the list to ensure smooth infinite loop for wide screens */}
        {[...clients, ...clients, ...clients].map((client, index) => {
          const imageSrc = getImagePath(client.file);

          return (
            <div
              key={index}
              className="w-[300px] h-[180px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-lg bg-white/10 border border-white/5 flex items-center justify-center overflow-hidden p-3">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={client.name}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  ) : (
                    <span className="text-white/50 font-bold text-xl">
                      {client.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-green-400 transition-colors"></div>
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold mb-1">
                  {client.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkedWith;
