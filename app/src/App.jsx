// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import profilePhoto from "./assets/profile_photo.png";

function App() {
  // State to keep track of mouse position percentages
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const lastPointRef = useRef({ x: 0, y: 0, t: 0, has: false });
  const rafRef = useRef(0);

  const scrollDirRef = useRef(1);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const minDistancePx = 3;
    const maxAgeMs = 650;
    const maxPoints = 90;

    const addPoint = (x, y, t) => {
      const last = lastPointRef.current;
      if (last.has) {
        const dx = x - last.x;
        const dy = y - last.y;
        if (dx * dx + dy * dy < minDistancePx * minDistancePx) {
          return;
        }
      }

      lastPointRef.current = { x, y, t, has: true };
      const points = pointsRef.current;
      points.push({ x, y, t });
      if (points.length > maxPoints)
        points.splice(0, points.length - maxPoints);
    };

    const handlePointerMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const t = performance.now();

      // Existing gradient-follow behavior
      const xPct = (x / window.innerWidth) * 100;
      const yPct = (y / window.innerHeight) * 100;
      setMousePos({ x: xPct, y: yPct });

      if (!prefersReducedMotion) addPoint(x, y, t);
    };

    // Use Pointer Events so it works for mouse + touch + pen.
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    // Prime first point so trail starts immediately.
    window.addEventListener(
      "pointerdown",
      (e) => {
        if (!prefersReducedMotion)
          addPoint(e.clientX, e.clientY, performance.now());
      },
      { passive: true }
    );

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || prefersReducedMotion) {
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
      };
    }

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      rafRef.current = window.requestAnimationFrame(draw);

      const now = performance.now();
      const points = pointsRef.current;

      // Drop old points
      while (points.length && now - points[0].t > maxAgeMs) points.shift();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (points.length < 2) return;

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      const n = points.length;
      const head = points[n - 1];

      for (let i = 0; i < n - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const t = i / (n - 1); // 0 = tail, 1 = head
        const alpha = Math.max(0, Math.min(1, t * t));
        const width = 1.5 + 7 * t;

        ctx.strokeStyle = `rgba(168, 85, 247, ${0.55 * alpha})`;
        ctx.lineWidth = width;
        ctx.shadowColor = `rgba(168, 85, 247, ${0.9 * alpha})`;
        ctx.shadowBlur = 18 * alpha;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }

      // Bright comet head
      ctx.shadowColor = "rgba(168, 85, 247, 1)";
      ctx.shadowBlur = 28;
      ctx.fillStyle = "rgba(168, 85, 247, 0.9)";
      ctx.beginPath();
      ctx.arc(head.x, head.y, 5.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    resize();
    draw();

    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = Array.from(
      document.querySelectorAll("[data-reveal='slide-up']")
    );
    if (!targets.length) return;

    if (prefersReducedMotion) {
      for (const el of targets) el.classList.add("is-visible");
      return;
    }

    lastScrollYRef.current = window.scrollY || 0;

    const handleScroll = () => {
      const y = window.scrollY || 0;
      scrollDirRef.current = y > lastScrollYRef.current ? 1 : -1;
      lastScrollYRef.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.remove(
              "is-visible",
              "reveal-from-top",
              "reveal-from-bottom"
            );

            el.classList.add(
              scrollDirRef.current === -1
                ? "reveal-from-top"
                : "reveal-from-bottom"
            );

            window.requestAnimationFrame(() => {
              el.classList.add("is-visible");
            });
          } else {
            el.classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -12% 0px" }
    );

    for (const el of targets) observer.observe(el);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Pass the mouse positions in as CSS variables
  const heroStyle = {
    "--mouse-x": `${mousePos.x}%`,
    "--mouse-y": `${mousePos.y}%`,
  };

  return (
    <div>
      <div className="hero-container" style={heroStyle}>
        <canvas ref={canvasRef} className="pointer-trail-canvas" />
        {/* Optional subtle noise overlay to match reference */}
        <div className="noise-overlay"></div>

        <nav className="navbar" aria-label="Primary">
          <a className="nav-link" href="#about">
            About Me
          </a>
          <a className="nav-link" href="#works">
            My Works
          </a>
          <a className="nav-link" href="#contact">
            Get in Touch
          </a>
        </nav>

        <div className="content-wrapper">
          {/* Add your navbar/header items here if needed */}
          <h1 className="hero-title">SHAWN DAVIES</h1>
          {/* Add the little icon below if needed */}
        </div>
      </div>

      <section className="about-me" id="about" aria-label="About Me">
        <div className="about-inner">
          <div className="about-copy">
            <h2 className="about-title" data-reveal="slide-up">
              I&apos;m <span className="about-titleAccent">Shawn Davies</span>,
              <br /> an AI/ML Engineer and Full Stack Developer
            </h2>
            <p className="about-text" data-reveal="slide-up">
              Based in Surabaya, Indonesia. I specialize in delivering business
              process solutions utilizing AI and machine learning technologies.
              My passion lies in leveraging technology to solve complex problems
              and drive innovation.
            </p>
          </div>

          <div
            className="about-visual"
            aria-hidden="true"
            data-reveal="slide-up"
          >
            <div className="about-glow" />
            <div className="about-photo">
              <img className="about-photoImg" src={profilePhoto} alt="" />
            </div>
          </div>
        </div>
        <div className="about-skills"></div>
      </section>

      <section className="experience" aria-label="Experience">
        <div className="experience-inner">
          <h2 className="experience-title" data-reveal="slide-up">
            Worked With
          </h2>

          <div className="logo-marquee" aria-label="Company logos">
            <div className="logo-track" aria-hidden="true">
              {["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"].map(
                (label) => (
                  <div key={`a-${label}`} className="logo-item">
                    <span className="logo-text">{label}</span>
                  </div>
                )
              )}
              {["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"].map(
                (label) => (
                  <div key={`b-${label}`} className="logo-item">
                    <span className="logo-text">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
