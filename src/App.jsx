import React from "react";
import { Dock, Navbar, Welcome, Home } from "#components";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
import {
  Safari,
  Terminal,
  Resume,
  Finder,
  Text,
  Photos,
  Contact,
  ImageWindowContext,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWindowContext />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
