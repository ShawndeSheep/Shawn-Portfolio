import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const techStackData = [
  // Language/Framework
  {
    name: "React JS",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Code Igniter",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  },
  {
    name: "Laravel",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "C++",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C#",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Express JS",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node JS",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Flask",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Angular",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: ".NET",
    category: "Language/Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },

  // AI/ML
  {
    name: "Python",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Tensorflow",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Keras",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  {
    name: "LangGraph",
    category: "AI/ML",
    icon: "https://cdn.simpleicons.org/langchain/61DAFB",
  }, // Menggunakan icon Langchain karena LangGraph bagian darinya
  {
    name: "n8n",
    category: "AI/ML",
    icon: "https://cdn.simpleicons.org/n8n/FF6D5B",
  },
  {
    name: "Google Ai Studio",
    category: "AI/ML",
    icon: "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
  },
  {
    name: "Gemini",
    category: "AI/ML",
    icon: "https://cdn.simpleicons.org/googlegemini/8E75FF",
  },
  {
    name: "ChatGPT",
    category: "AI/ML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    name: "Claude",
    category: "AI/ML",
    icon: "https://cdn.simpleicons.org/anthropic/D97757",
  },

  // DevOps Tools
  {
    name: "Github",
    category: "DevOps Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    category: "DevOps Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  // Cloud
  {
    name: "AWS",
    category: "Cloud",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
];

const categories = [
  "All",
  "Language/Framework",
  "AI/ML",
  "DevOps Tools",
  "Cloud",
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  const filteredItems =
    activeFilter === "All"
      ? techStackData
      : techStackData.filter((item) => item.category === activeFilter);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tech-item",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
      );
    },
    { scope: containerRef, dependencies: [activeFilter] },
  );

  return (
    <section className="py-20 bg-black text-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-wider">
          Experienced Tech-Stack
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-6 py-2 rounded-full border border-white/20 text-sm md:text-base transition-all duration-300
                ${
                  activeFilter === cat
                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    : "bg-transparent text-gray-400 hover:text-white hover:border-white/50"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-6 w-full"
        >
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="tech-item w-[140px] h-[100px] md:w-[160px] md:h-[120px] 
                         bg-neutral-900 border border-neutral-800 rounded-xl 
                         flex flex-col items-center justify-center p-4 gap-2 
                         hover:border-white/30 transition-colors duration-300 group"
            >
              {/* Fallback Icon / Text Logo */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:text-white group-hover:bg-neutral-700 transition-colors">
                <img
                  src={item.icon}
                  alt={item.name.substring(0, 2).toUpperCase()}
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-xs md:text-sm text-center text-gray-300 group-hover:text-white font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
