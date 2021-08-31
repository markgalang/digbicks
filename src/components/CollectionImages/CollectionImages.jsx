import React from "react";

import "./CollectionImages.css";

import CollectionImage from "components/CollectionImage/CollectionImage";

export default function Collectionimages(props) {
  const collections = [
    {
      image: "assets/images/placeholderImage.png",
    },
    {
      image: "assets/images/placeholderImage.png",
    },
    {
      image: "assets/images/placeholderImage.png",
    },
    {
      image: "assets/images/placeholderImage.png",
    },
    {
      image: "assets/images/placeholderImage.png",
    },
    {
      image: "assets/images/placeholderImage.png",
    },
  ];

  const collection = collections.map((item, index) => (
    <CollectionImage key={index} image={item.image} />
  ));
  return (
    <>
      <div className="collectionImagesContainer">{collection}</div>
    </>
  );
}
