// eslint-disable-next-line
export default (state = [], action) => {
  const initialData = [
    {
      title: <strong>What is NFT?</strong>,
      content:
        "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.",
    },
    {
      title: <strong>What are DigBicks?</strong>,
      content: (
        <div>
          <p>
            DigBicks is a collection of 6969 unique NFTs in the Ethereum
            blockchain. Each DigBick has its distinct personality defined by
            carefully curated attributes such as headgears, weapons, and more.{" "}
          </p>
        </div>
      ),
    },
    {
      title: <strong>How can I get the D?</strong>,
      content: (
        <div>
          <p>
            1. Download and install a Chrome browser plugin called{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            >
              {" "}
              MetaMask
            </a>
            . This will allow NFT marketplaces website to access to your
            Ethereum account.
          </p>
          <p>
            2. Ether is required for new accounts. The MetaMask plugin has a
            button that will allow you to buy Ether from your desired exchange.
          </p>
          <p>
            3. Once you have the plugin installed, This website wille recognize
            it and will allow you to bid on, buy and sell DigBicks directly in
            the interface
          </p>
        </div>
      ),
    },
    {
      title: <strong>How much does it cost to build a DigBicks Army?</strong>,
      content: "The minting fee for each DigBicks is 0.069 ETH.",
    },
    {
      title: <strong>How many DigBicks can I mint at a time?</strong>,
      content:
        "We know how badly you want them, but we are limiting the minting to 5 DigBicks per transaction. Afterall, everybody deserves the D!",
    },
    {
      title: <strong>How can I view my DigBicks after minting?</strong>,
      content: (
        <p>
          Wanna see how BIG is your D? You can see it on your{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://opensea.io/"
          >
            {" "}
            OpenSea Account.
          </a>
        </p>
      ),
    },
    {
      title: <strong>What can I do with my DigBick NFT?</strong>,
      content: (
        <p>
          Don't have to think HARD! You can do whatever you want with it.
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/invite/MPBfmRyjDT"
          >
            Join our discord community
          </a>{" "}
          for more information.
        </p>
      ),
    },
  ];
  return [...initialData];
};
