import NavBar from "../../components/navBar";
import HeroSction from "../../components/hero";
import ProductsSection from "../../components/Products";
import { Fragment } from "react";
import { featureCatagoriesdData } from "../../Api/featuredCatagoriesData";
import Table from "../../components/Table";

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
      <div className="featured-product">
        <ProductsSection test="featured" title="title1" />
      </div>

      <div className="top-rated-product">
        <ProductsSection test="topRated" title="title2" />
      </div>
    </Fragment>
  );
};

export default HomePage;
