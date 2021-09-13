import Footer from "components/Footer/Footer";
import Collection from "./section/Collection/Collection";
import HeroVideo from "section/heroVideo/heroVideo";
import Minting from "section/Minting/Minting";
import Roadmap from "section/Roadmap/Roadmap";

function App() {
  return (
    <div>
      <HeroVideo />
      <Minting />
      {/* <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <VideoPlayback isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Collection />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
