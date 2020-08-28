import React from "react";
import "./header.css";
import logoPath from "../../assets/img/icons8-facebook-48.png";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logoPath} alt="F"></img>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search facebook" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h4>tuannguyen</h4>
        </div>
        <IconButton>
            <AddIcon/>
        </IconButton>
        <IconButton>
            <ForumIcon/>
        </IconButton>
        <IconButton>
            <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
            <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
