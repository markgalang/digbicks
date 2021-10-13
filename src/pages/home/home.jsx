import { useEffect } from "react";
import Footer from "components/Footer/Footer";
import Collection from "section/Collection/Collection";
import HeroVideo from "section/heroVideo/heroVideo";
import Minting from "section/Minting/Minting";
import Roadmap from "section/Roadmap/Roadmap";
import FAQ from "section/FAQ/FAQ";
import Team from "section/Team/Team";
import NavbarComponent from "components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { handleWalletConnect } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  useEffect(() => {
    dispatch(handleWalletConnect());
  }, []);

  useEffect(() => {
    if (blockchain.errorMsg) {
      alert(blockchain.errorMsg);
    }
  }, [blockchain.errorMsg]);

  return (
    <div>
      <NavbarComponent />
      <HeroVideo />
      <Minting />
      <Roadmap />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
