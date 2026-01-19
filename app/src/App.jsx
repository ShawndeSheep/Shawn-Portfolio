import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import WorkedWith from "./sections/WorkedWith";
import Solutions from "./sections/Solutions";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Quote from "./sections/Quote";
import Contact from "./sections/Contact";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white">
            <Navbar />
            <Hero />
            <WorkedWith />
            <Solutions />
            <About />
            <Projects />
            <TechStack />
            <Quote />
            <Contact />
          </main>
        }
      />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
