import React from "react";
import "./Collection.css";
import CollectionImagesContainer from "components/CollectionImages/CollectionImages";

export default function Collection(props) {
  return (
    <>
      <section id="collection" className="collectionWrapper">
        <div className="customContainerx">
          <div className="collectionContentContainer">
            <div className="collectionContent">
              <div className="header">
                The
                <br />
                Collection
              </div>
              <div className="headerMob">The Collection</div>
              {/* <div className="description">
                "In spite of the fact that the unification of the feedback
                system becomes a serious problem. It goes without saying that
                the explicit examination of major decisions, that lie behind the
                software engineering concepts and practices should help in
                resolving present challenges. One way or another
              </div> */}
            </div>
            <a
              href="https://opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="collectionButton"
            >
              Show More
            </a>
          </div>

          <CollectionImagesContainer />

          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="collectionButtonMob"
          >
            Show More
          </a>
        </div>
      </section>
    </>
  );
}
