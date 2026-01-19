import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectShowcase from "../assets/project_showcase.mp4";

const Projects = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [loadingDots, setLoadingDots] = useState(0);

  // Handle dot animation
  useEffect(() => {
    let interval;
    if (isNavigating) {
      interval = setInterval(() => {
        setLoadingDots((prev) => (prev % 3) + 1);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isNavigating]);

  const handleExplore = () => {
    if (isNavigating) return;
    setIsNavigating(true);

    // Simulate loading delay
    setTimeout(() => {
      navigate("/project");
    }, 3000);
  };

  const getButtonText = () => {
    if (!isNavigating) return "Explore Projects";
    return `LOADING${".".repeat(loadingDots)}`;
  };

  return (
    <section id="projects" className="bg-black py-24 px-4 md:px-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Video Showcase Container */}
        <div className="w-full max-w-7xl relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(192,132,252,0.5)] group aspect-[16/5]">
          <video
            src={projectShowcase}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {/* Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute bottom-12 md:bottom-20">
              <button
                onClick={handleExplore}
                disabled={isNavigating}
                style={{ fontFamily: "sans-serif" }}
                className="group/btn flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg md:text-xl hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="tracking-wide">{getButtonText()}</span>
                {!isNavigating && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
