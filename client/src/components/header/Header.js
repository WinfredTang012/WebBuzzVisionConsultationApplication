import { Link,useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import * as FaIcons from "react-icons/fa";
import { TbLogout } from 'react-icons/tb'
import { SidebarData } from "./HeaderData";
import styled from "styled-components";
import { logout } from "../../redux/actions/authAction";
import logo from "../../images/logo.png"
import Avatar from "../Avatar";
import NotifyModal from '../NotifyModal'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'



const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const { auth, theme, notify } = useSelector((state) => state);

  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };
  return (
    <>
      <div className="navbar" >
        <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
          <FaIcons.FaBars style={{ filter: theme ? "invert(1)" : "invert(0)" }} />
          <img style={{ width: 62, height: 60 , "marginLeft": 1 , filter: `${theme ? "invert(1)" : "invert(0)"}` }}  src={logo} alt="horse"></img>
          
        </Link>
        <h5>Web-Buzz</h5>
        <div className="nav-item dropdown ml-auto" style={{ opacity: 1 }}>
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
          </span>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Profile
            </Link>
            <label
              htmlFor="theme"
              className="dropdown-item"
              onClick={() =>
                dispatch({
                  type: GLOBALTYPES.THEME,
                  payload: !theme,
                })
              }
            >
              {theme ? "Light mode" : "Dark mode"}
            </label>

            <div className="dropdown-divider"></div>
            <Link
              className="dropdown-item"
              to="/"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>

      <div
        className={sidebar ? "sidebar-container active" : "sidebar-container"}
      >
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
              <FaIcons.FaWindowClose style={{ filter: theme ? "invert(1)" : "invert(0)" }}/>
            </Link>
          </li>

          <Avatar src={auth.user.avatar} size="big-avatar-side"  />
          <div className="sidebar-sides">{auth.user.fullname}</div>
        
          {auth.user.position === 'patient' ? (
            <>
          {SidebarData.map((sidebaritem, index) => {

            if (index <=5 ){
            return (
              <li
                key={sidebaritem.id}
                className={sidebaritem.cName}
                onClick={showSidebar}
              >
                <Link to={sidebaritem.path}>
                  {sidebaritem.icon}
                  <span>{sidebaritem.title}</span>
                </Link>
              </li>
            );
            }


          })}
          </>
          ) : (
            <>
            {SidebarData.map((sidebaritem, index) => {
  
              if (index <=4 ){
              return (
                <li
                  key={sidebaritem.id}
                  className={sidebaritem.cName}
                  onClick={showSidebar}
                >
                  <Link to={sidebaritem.path}>
                    {sidebaritem.icon}
                    <span>{sidebaritem.title}</span>
                  </Link>
                </li>
              );
              }
  
  
            })}
            </>
                          )
                        }
        </ul>
      </div>
    </>
  );
}
export default Header;

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;

  }
`;

