import React from "react";

import "./CollectionImages.css";

import CollectionImage from "components/CollectionImage/CollectionImage";

import BickFather from "assets/bicks/bick-father.jpg";
import SupremeLeader from "assets/bicks/supreme-leader.jpg";
import BobMarley from "assets/bicks/bob.jpg";
import Trump from "assets/bicks/trump.jpg";
import Pope from "assets/bicks/pope.png";
import MichealJackson from "assets/bicks/michael-jackson.jpg";

export default function Collectionimages(props) {
  const collections = [
    {
      image: BickFather,
      link: "https://opensea.io/",
      imageDescription: "BickFather",
    },
    {
      image: SupremeLeader,
      link: "https://opensea.io/",
      imageDescription: "BickFather",
    },
    {
      image: BobMarley,
      link: "https://opensea.io/",
      imageDescription: "BickFather",
    },
    {
      image: Trump,
      link: "https://opensea.io/",
      imageDescription: "BickFather",
    },
    {
      image: Pope,
      link: "https://opensea.io/",
      imageDescription: "BickFather",
    },
    {
      image: MichealJackson,
      link: "https://opensea.io/",
      imageDescription: "BickFather",
    },
  ];

  const collection = collections.map((item, index) => (
    <CollectionImage
      key={index}
      image={item.image}
      link={item.link}
      imageDescription={item.imageDescription}
    />
  ));

  return (
    <>
      <div className="collectionImagesContainer">{collection}</div>
    </>
  );
}
