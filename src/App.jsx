import React from "react";
import { Dock, Navbar, Welcome } from "#components";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
import {
  Safari,
  Terminal,
  Resume,
  Finder,
  Text,
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
    </main>
  );
};

export default App;
