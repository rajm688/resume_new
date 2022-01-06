import * as React from "react";

import "./App.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { About } from "./About";
import { Projects } from "./Projects";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}


