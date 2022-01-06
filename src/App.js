import * as React from "react";

import "./App.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer/>

    </div>
  );
}
const Footer = () => (
  <div className="footer">
    <p>Made with ❤ By Raj..!</p>
  </div>
);
