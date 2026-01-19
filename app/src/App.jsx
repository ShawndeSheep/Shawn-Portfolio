import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WorkedWith from "./sections/WorkedWith";
import Solutions from "./sections/Solutions";
import Quote from "./sections/Quote";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <WorkedWith />
      <Solutions />
      <Quote />
      <Contact />
    </main>
  );
}

export default App;
