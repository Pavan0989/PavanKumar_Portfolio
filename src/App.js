import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <StarryBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <Home />
        <About />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
