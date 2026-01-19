import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Projects</h1>
      <p className="text-xl text-white/70 mb-12">More content coming soon...</p>
      <Link
        to="/"
        className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ProjectPage;
