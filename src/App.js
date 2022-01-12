import * as React from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Skills } from "./Skills";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
const Footer = () => (
  <div className="footer">
    <p>Designed and developed by Raj.. this webpage is under construction</p>
  </div>
);
