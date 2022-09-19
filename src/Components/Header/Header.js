import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ basket }, user] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="Search" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineone">Hello Guest</span>
        <Link to="/login">
            <span className="header__optionLinetwo">
              {user ? "Sign Out" : "SignIn"}
            </span>
        </Link>
          </div>
        <div className="header__option">
          <span className="header__optionLineone">Returns</span>
          <span className="header__optionLinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineone">Your</span>
          <span className="header__optionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLinetwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
