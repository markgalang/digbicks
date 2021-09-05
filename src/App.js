import { useState } from "react";
import VideoPlayback from "components/VideoPlayback/VideoPlayback";
import Footer from "components/Footer/Footer";
import Hero from "./section/hero/hero";
import Collection from "./section/Collection/Collection";
import HeroVideo from "section/heroVideo/heroVideo";
import Minting from "section/Minting/Minting";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HeroVideo />
      <Minting />
      {/* <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <VideoPlayback isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
