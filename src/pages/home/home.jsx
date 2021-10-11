import { useState, useEffect } from "react";
import Footer from "components/Footer/Footer";
import Collection from "section/Collection/Collection";
import HeroVideo from "section/heroVideo/heroVideo";
import Minting from "section/Minting/Minting";
import Roadmap from "section/Roadmap/Roadmap";
import FAQ from "section/FAQ/FAQ";
import Team from "section/Team/Team";
import NavbarComponent from "components/Navbar/Navbar";
import Web3 from "web3";

function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleConnect();
  }, []);

  const handleConnect = async () => {
    setIsLoading(true);
    // Modern Browsers like Chrome and Brave
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });

        console.log(accounts, networkId);
      } catch (error) {
        setIsLoading(false);
        // User denied account access...
        alert(
          "You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html"
        );

        return;
      }
    } else {
      setIsLoading(false);
      // you cant connect
      alert(
        "You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html"
      );

      return;
    }
    let web3 = new Web3(window.ethereum);

    // Check network id
    let chainId = await web3.eth.net.getId();

    if (chainId !== 4) {
      setIsLoading(false);
      alert("Please switch your wallet to ETH network");
      return;
    }

    // Set default account
    let accounts = await web3.eth.getAccounts();
    window.account = accounts[0];

    window.w3 = web3;

    setIsLoading(false);
    setIsWalletConnected(true);
  };

  return (
    <div>
      <NavbarComponent
        isWalletConnected={isWalletConnected}
        isLoading={isLoading}
        handleConnect={handleConnect}
      />
      <HeroVideo />
      <Minting />
      {/* <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
                <VideoPlayback isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <Collection /> */}
      <Roadmap />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
