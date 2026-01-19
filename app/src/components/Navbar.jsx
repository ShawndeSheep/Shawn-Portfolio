import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-50 flex justify-between md:justify-center items-center px-6 transition-all duration-75 ${
          isScrolled
            ? "top-0 py-4 bg-black/50 backdrop-blur-md mix-blend-normal shadow-lg"
            : "top-5 py-4 md:px-12 bg-transparent mix-blend-difference"
        } text-white`}
      >
        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative pointer-events-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            ></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg tracking-wide pointer-events-auto">
          {["About Me", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full font-light px-2"
              style={{ fontFamily: "serif" }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay Portal */}
      {createPortal(
        <div
          className={`fixed inset-0 bg-black text-white flex flex-col justify-center items-center gap-8 text-2xl transition-all duration-500 md:hidden z-40 ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
        >
          {["About Me", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setIsOpen(false)}
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full font-light"
              style={{ fontFamily: "serif" }}
            >
              {item}
            </a>
          ))}
        </div>,
        document.body,
      )}
    </>
  );
};

export default Navbar;
