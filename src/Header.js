import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from  "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
  
    return (
        <div className='header'>
           <Link to="/">
           <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
           </Link>
            <div
            className="header_search">
                <input
                className="header_serchInput"
                type="text" />
                <SearchIcon
                className="header_serchIcon" />
            </div> 
            <div className="header_nav">
                <Link to={!user && '/login'}> 
                <div onClick={handleAuthenticaton} className="header_option">
                  <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                  <spam className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</spam>
                </div> 
                </Link> 
                <Link to="/orders">
                <div className="header_option">
                  <span className="header_optionLineOne">Returns</span>
                  <spam className="header_optionLineTwo">&Orders</spam>
                </div>
                </Link>
                <div className="header_option">
                  <span className="header_optionLineOne">Your</span>
                  <spam className="header_optionLineTwo">Prime</spam>
                </div>  
                <Link to="/checkout">
                <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <spam className="header_optionLineTwo Header_basketCount">{basket?.length}</spam>
                </div>
                </Link> 
            </div>
        </div>
    );
}

export default Header
