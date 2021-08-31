import { useState } from "react";
import VideoPlayback from "components/VideoPlayback/VideoPlayback";
import Footer from "components/Footer/Footer";
import Hero from "./section/hero/hero";
import Collection from "./section/Collection/Collection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <VideoPlayback isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
