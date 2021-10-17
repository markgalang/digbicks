import { useEffect } from "react";
import Footer from "components/Footer/Footer";
import CustomModal from "components/CustomModal/CustomModal";
import AlertMessage from "components/AlertMessage/AlertMessage";
import HeroVideo from "section/heroVideo/heroVideo";
import Minting from "section/Minting/Minting";
import Roadmap from "section/Roadmap/Roadmap";
import FAQ from "section/FAQ/FAQ";
import Team from "section/Team/Team";
import NavbarComponent from "components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { handleWalletConnect } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleWalletConnect());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <CustomModal />
      <AlertMessage />
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
