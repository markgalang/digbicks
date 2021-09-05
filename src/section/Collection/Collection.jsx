import React from "react";
import "./Collection.css";
import CollectionImagesContainer from "components/CollectionImages/CollectionImages";

import { Button } from "antd";

export default function Collection(props) {
  return (
    <>
      <section id="collection" className="collectionWrapper">
        <div className="container">
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
            <div className="collectionButton">
              <Button>Show More</Button>
            </div>
          </div>

          <CollectionImagesContainer />
          <div className="collectionButtonMob">
            <Button>Show More</Button>
          </div>
        </div>
      </section>
    </>
  );
}
