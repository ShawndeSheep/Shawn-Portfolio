import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import project images
import medicineCounterImg from "../assets/medicine-counter.png";
import modcus from "../assets/modcus.jpeg";
import indoraya from "../assets/indoraya.jpeg";
import bilibrain from "../assets/bilibrain_ss.png";
import foskin from "../assets/foskin.png";

gsap.registerPlugin(ScrollTrigger);

// Sample project data - replace with actual project images
const projects = [
  {
    title: "BiliBrain",
    image: bilibrain,
    desc: "AI-powered mobile app for early detection of neonatal jaundice using deep learning and image analysis.",
    github:
      "https://drive.google.com/file/d/1svAQC2lmKHcQHVsbLu4xxrQsIIXNxVaC/view",
    year: "2025",
    tags: ["TENSORFLOW", "PYTHON", "FLASK", "REACT NATIVE", "MYSQL", "OPENCV"],
  },
  {
    title: "FOSKIN",
    image: foskin,
    desc: "AI mobile assistant for skincare management with advanced acne detection and personalized recommendations.",
    github:
      "https://www.linkedin.com/posts/shawn-davies-sugianto_lifeatbangkit-bangkit24h2-bepchallenge-activity-7280611677169926144-R2ou?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXIxvwBim8KtJ-TXcjKZt0wBgEkbxPeqiQ",
    year: "2024",
    tags: ["MACHINE LEARNING", "TENSORFLOW"],
  },
  {
    title: "Indoraya ERP",
    image: indoraya,
    desc: "Comprehensive ERP and Point-of-Sale platform for inventory management, sales processing, and financial reporting.",
    github: "",
    year: "2025",
    tags: ["LARAVEL", "MYSQL"],
  },
  {
    title: "Medicine Counter ",
    image: medicineCounterImg,
    desc: "Medicine,Pills and Capsule counter using SAM3 Segmentation and Clustering.",
    github: "https://github.com/ShawndeSheep/medicine-counter",
    year: "2026",
    tags: ["FLASK", "OLLAMA"],
  },
  {
    title: "MODCUS Financial AI",
    image: modcus,
    desc: "Financial AI assistant for value investing in Indonesian stocks market.",
    github: "https://modcus.fransiscus.dev/home",
    year: "2026",
    tags: ["LangGraph", "POSTGRESQL", "PYTHON"],
  },
];

// Project Card Component (reusable)
const ProjectCard = ({ project, index, isMobile = false }) => (
  <div className={`flex flex-col gap-3 ${isMobile ? "w-full" : "shrink-0"}`}>
    <div
      className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg group ${
        isMobile ? "aspect-[4/3]" : "aspect-[4/3]"
      }`}
      style={!isMobile ? { width: "clamp(400px, 45vw, 600px)" } : {}}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <span className="text-white/20 text-6xl md:text-7xl font-bold">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </a>

      {/* Description - gradient overlay on mobile, hover on desktop */}
      {isMobile ? (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
          <p
            className="text-white/90 text-sm leading-relaxed"
            style={{ fontFamily: "ui-serif" }}
          >
            {project.desc}
          </p>
        </div>
      ) : (
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <p
            className="text-white text-center text-base leading-relaxed"
            style={{ fontFamily: "ui-serif" }}
          >
            {project.desc}
          </p>
        </div>
      )}
    </div>

    {/* Project Info */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg md:text-2xl font-bold uppercase tracking-wide">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tags
            .slice(0, isMobile ? 3 : project.tags.length)
            .map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-[10px] md:text-xs text-gray-500 font-mono"
              >
                [ {tag} ]
              </span>
            ))}
          {isMobile && project.tags.length > 3 && (
            <span className="text-[10px] text-gray-400 font-mono">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
      <span className="text-sm md:text-lg font-medium text-gray-400">
        {project.year}
      </span>
    </div>
  </div>
);

// Desktop Horizontal Scroll Gallery
const DesktopGallery = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    // Only run on md screens and up
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    const gallery = galleryRef.current;

    if (!container || !gallery) return;

    const getScrollAmount = () => {
      return gallery.scrollWidth - window.innerWidth;
    };

    const tween = gsap.to(gallery, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * projects.length) + 1,
            projects.length,
          );
          setCurrentIndex(newIndex);
        },
      },
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        tween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      } else {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        ref={galleryRef}
        className="flex items-center h-full gap-8 px-16 lg:px-24"
        style={{ width: "fit-content" }}
      >
        <div className="w-[10vw] shrink-0" />
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isMobile={false}
          />
        ))}
        <div className="w-[20vw] shrink-0" />
      </div>

      {/* Fixed Bottom UI */}
      <div className="fixed bottom-8 left-8 right-8 flex items-end justify-between pointer-events-none z-40">
        <h1 className="text-8xl lg:text-9xl font-bold text-black/30 select-none">
          Projects
        </h1>
        <div className="text-xl font-mono text-gray-400">
          <span className="text-black font-bold">{currentIndex}</span>
          <span className="mx-1">/</span>
          <span>{projects.length}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 animate-pulse pointer-events-none">
        <span className="text-sm">Scroll to explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

// Mobile Vertical Scroll Gallery
const MobileGallery = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Projects</h1>
        <p className="text-sm text-gray-500">Scroll to explore my work</p>
      </div>

      {/* Vertical Cards */}
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} index={index} isMobile={true} />
            <div className="text-xs text-gray-400 font-mono text-right mt-2">
              {index + 1} / {projects.length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-4 md:top-8 md:left-8 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span className="font-medium text-2xl md:text-2xl">Back</span>
        </Link>
      </div>

      {/* Mobile: Show vertical gallery */}
      <div className="block md:hidden">
        <MobileGallery />
      </div>

      {/* Desktop: Show horizontal gallery */}
      <div className="hidden md:block">
        <DesktopGallery />
      </div>
    </main>
  );
};

export default ProjectPage;
