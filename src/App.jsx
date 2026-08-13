import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Besor3a from "./sections/Besor3a";
import Experience from "./sections/Experience";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import FloatingIcons from "./components/FloatingIcons";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="noise">
        <FloatingIcons />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <Services />
          <Work />
          <Besor3a />
          <Experience />
          <Blog />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
