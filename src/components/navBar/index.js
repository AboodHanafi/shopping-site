import React from "react";
import "./style.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemCounter from "../ItemCounter";
import SearchIcon from "@mui/icons-material/Search";
const NavBar = () => {
  return (
    <div className="header">
      <div className="inner-container flex" id="inner-container-header">
        <div className="flex logo">
          <h1 id="pro">Pro</h1>
          <h1 id="shop">Shop</h1>
        </div>
        <div className="search-box flex">
          <input className="input-search-box" type="text" value="iphone" />
          <div className="search-button">
            <button className="button-search-box">Search</button>
            <div className="search-box-icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="main-icons flex">
          <div className="login-signup flex">
            <div className="login-icon">
              <PersonOutlineIcon />
            </div>
            <div className="icon-text">login/signup</div>
          </div>
          <div className="wish-list flex">
            <div className="wishlist-icon">
              <BookmarkIcon />
              <div>
                <ItemCounter counter="0" />
              </div>
            </div>
            <div className="icon-text">wishList</div>
          </div>
          <div className="cart flex">
            <div className="cart-icon">
              <ShoppingCartIcon />
              <div>
                <ItemCounter counter="0" />
              </div>
            </div>
            <div className="icon-text">cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
