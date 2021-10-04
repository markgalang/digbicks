export default (state = [], action) => {
  const initialData = [
    {
      title: "How can build my DigBicks Army?",
      content: (
        <div>
          <p>There are ways to build your digbicks army suchs as</p>
          <br />
          <p>
            Whitelist Pre-sale - We appreciate the early adapters/supporters and
            who have a great vibe in our community. Stay active, Stay tuned!
          </p>
          <p>
            Launch Pre-sale - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dignissimos, autem.
          </p>
          <p>
            Secondary Market - You can adopt them from this website and Opensea
          </p>
        </div>
      ),
    },
    {
      title: "What are DigBicks?",
      content: (
        <div>
          <p>
            DigBicks is a collection of 6969 unique NFTs in the Ethereum
            blockchain. Each DigBick has its distinct personality defined by
            carefully curated attributes such as headgears, mouth accessories,
            weapons, and more.{" "}
          </p>
          <br />
          <p>
            They are all fun and quirky, but you’d be more surprised by the rare
            ones! Exciting, right?{" "}
          </p>
        </div>
      ),
    },
    {
      title: "How much does it cost to build a DigBicks army?",
      content: "The minting fee for each DigBicks is 0.069 ETH.",
    },
    {
      title: "What can I do with my Super Shiba NFT?",
      content:
        "Once you have a DigBicks,you will have this greater power and it's yours to use in any purposes. Please read our Terms & Conditions for more information.",
    },
    {
      title: "What is NFT?",
      content:
        "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.",
    },
  ];
  return [...initialData];
};
