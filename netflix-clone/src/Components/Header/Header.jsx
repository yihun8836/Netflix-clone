import React from "react";
import "./header.css";
import logo from "../../assets/images/icons/Netflix-Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {

  return (
    <>
      <div className="header">
        <nav className="nav-wraper">
          <div className="left-wraper">
            <div className="logo">
              <img src={logo} alt="" className="logo_sytle" />
            </div>
            <div className="ul-wraper">
              <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Brows by Languages</li>
              </ul>
            </div>
          </div>
          <div className="rghit-wraper">
            <div className="icons-wraper">
              <ul className="icons-li">
                <li>
                  <SearchIcon className="icon" />
                </li>
                <li>
                <NotificationsNoneIcon className="icon" />

                </li>
                <li>
                  <AccountBoxIcon className="icon" />
                </li>
                <li>
                <ArrowDropDownIcon className="icon" />

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
