import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import { Link } from 'react-router-dom';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
  const [{ basket ,user}, dispatch] = useStateValue()
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    };

    return (
      <div className="Header">
        <Link to="/" className="header__clearlink">
          <img
            className="Header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="Header_search">
          <input className="Header_searchIn" type="text" />
          <SearchIcon className="header_SearchIcon" />

          <div className="Header_nav">
            <Link to={!user && "/login"} className="header__clearlink">
              <div onClick={handleAuthentication} className="Header_option">
                <span className="Header_optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="Header_optionLineTwo">
                  {" "}
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            <Link to="/Orders" className="header__clearlink">
              <div className="Header_option">
                <span className="Header_optionLineOne">Returns</span>
                <span className="Header_optionLineTwo">Orders</span>
              </div>
            </Link>

            <div className="Header_option">
              <span className="Header_optionLineOne">Your</span>
              <span className="Header_optionLineTwo">Prime</span>
            </div>
            <Link to="/Checkout" className="header__clearlink">
              <div className="Header_optionBasket">
                <ShoppingBasketIcon />
                <span className="Header_optionLineTwo  Header_basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Header