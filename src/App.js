import "./App.css";
import { AboutMe } from "./pages/AboutMe";
import { Proyects } from "./pages/Proyects";
import { Contact } from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<AboutMe />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Proyects" element={<Proyects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
export default App;
