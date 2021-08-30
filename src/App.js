import { useState } from "react";
import VideoPlayback from "components/VideoPlayback/VideoPlayback";
import Hero from "./section/hero/hero";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <VideoPlayback isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
