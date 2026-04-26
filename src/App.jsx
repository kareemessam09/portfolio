import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
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
          <Work />
          <Experience />
          <Blog />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
