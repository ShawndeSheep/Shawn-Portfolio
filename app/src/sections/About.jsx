import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpeg";

const About = () => {
  return (
    <section
      id="aboutme"
      className="bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-white text-3xl md:text-5xl font-bold font-serif tracking-tight">
              About Me
            </h2>
            <div
              className="flex flex-col gap-6 text-white/70 leading-relaxed font-light"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Shawn Davies is a fresh graduate in Informatics and a current
                Master's student specializing in
                <span className="font-medium font-semibold">
                  {" "}
                  Artificial Intelligence and software development.
                </span>
              </p>
              <p>
                With expertise in building robust applications and implementing
                machine learning models, he is a proactive contributor to
                innovative projects, always focused on continuous learning and
                professional growth.
              </p>
              <p>
                From full-stack development to AI-driven solutions, Shawn
                combines technical depth with strong communication skills to
                deliver impactful results.
              </p>
              <p>📍Surabaya, Indonesia 🇮🇩</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1GWJuH1TKIUUODR_3-rJD_mETFj887veF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "sans-serif" }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-white/20 hover:scale-105 transition-all duration-300 w-fit"
            >
              Download my CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column: Images (Photocard Style) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center lg:justify-end">
            {/* Card 1 (Back) */}
            <div className="absolute left-4 md:left-12 top-12 w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden -rotate-6 transition-all duration-500 hover:-translate-y-4 hover:rotate-0 hover:z-20 hover:scale-105 shadow-2xl border border-white/10 z-0">
              <img
                src={about2}
                alt="Portrait of Shawn"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Card 2 (Front) */}
            <div className="absolute right-4 md:right-12 bottom-12 w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden rotate-6 transition-all duration-500 hover:-translate-y-4 hover:rotate-0 hover:scale-105 shadow-2xl border border-white/10 z-10">
              <img
                src={about1}
                alt="Shawn working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
