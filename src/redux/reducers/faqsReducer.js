import { Link } from "react-router-dom";

export default (state = [], action) => {
  const initialData = [
    {
      title: <strong>How can you build my DigBicks Army?</strong>,
      content: (
        <div>
          <p>Fair Launch will happen and everyone deserve to get the D!</p>
        </div>
      ),
    },
    {
      title: <strong>What are DigBicks?</strong>,
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
      title: <strong>How much does it cost to build a DigBicks army?</strong>,
      content: "The minting fee for each DigBicks is 0.069 ETH.",
    },
    {
      title: <strong>What can I do with my DigBick NFT?</strong>,
      content: (
        <p>
          Once you have a DigBicks,you will have this greater power and it's
          yours to use in any purposes. Please read our{" "}
          <Link to="/terms-and-condition"> Terms & Conditions</Link> for more
          information.
        </p>
      ),
    },
    {
      title: <strong>What is NFT?</strong>,
      content:
        "A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.",
    },
  ];
  return [...initialData];
};
