import NavBar from "../../components/navBar";
import HeroSction from "../../components/hero";
import { Fragment } from "react";
import { featureCatagoriesdData } from "../../Api/featuredCatagoriesData";

import "./style.css";

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <NavBar />
        <HeroSction />
      </div>
      <div className="inner-container Featured-Categories">
        <div className="title-Featured-Categories">
          <h1>Featured Categories</h1>
          <div className="yellow-line"></div>
          <hr />
        </div>
        <div className="flex images-section">
          {featureCatagoriesdData.map((item) => {
            return (
              <div className="flex images-Featured-Categories" key={item.id}>
                <div
                  className="list-item-image"
                  style={{
                    background: `url(${item.background})center center no-repeat`,
                  }}
                ></div>
                <div className="list-item-title">
                  <h3>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
