import "./style.css";
import { Rating } from "@mui/material";
import CartButton from "../AddToCartBtn";
import { productData } from "../../Api/productData";

const ProductsSection = (props) => {
  const { test, title } = props;
  return (
    <section className="main-product-section">
      <div className="product-section inner-container ">
        <div className="main-title">
          <div className="title-main-product">
            <div className="text-main-title">
              <h1>{productData[title]}</h1>
            </div>
            <div className="yellow-line"></div>
            <hr />
          </div>
        </div>
        <div className="flex slider-main-product">
          {productData[test].map((item) => {
            return (
              <div className="list-item-main-product">
                <div
                  className="image-main-product"
                  style={{
                    background: `url(${item.image}) center center no-repeat`,
                  }}
                ></div>
                <div className="flex details-main-product">
                  <p className="flex">{item.describtion}</p>
                  <Rating
                    name="half-rating"
                    defaultValue={item.rate}
                    precision={0.5}
                  />
                  <div className="price-main-product">
                    <h1>{item.price}</h1>
                  </div>
                  <CartButton />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
