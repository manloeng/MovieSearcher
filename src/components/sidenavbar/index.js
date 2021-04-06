import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link, useLocation } from "react-router-dom";

import * as colors from "../../colors";
// import Arrow from "../../images/arrow-icon.png";
// import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.innerWidth < 768 ? setShowBurger(true) : setShowBurger(false);
  }, [dimensions]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const showMenu = (showBurger && isOpen) || !showBurger;

  return (
    <>
      {showBurger && !isOpen && (
        <div>
          <button onClick={() => setIsOpen(true)}>
            <BurgerIcon src="/images/burger.png" alt="hamburger menu"></BurgerIcon>
          </button>
          <span>
            <h1>Discover</h1>
          </span>
        </div>
      )}

      {showMenu && (
        <SideNavBarCont className={isOpen ? "visible" : ""}>
          {showBurger && isOpen && (
            <button onClick={() => setIsOpen(false)}>
              Close
              {/* <CrossIcon></CrossIcon> */}
            </button>
          )}
          <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley
            <NavIcon>{/* <img src={Arrow} alt="Account Information"></img> */}</NavIcon>
          </SideNavMainLink>
          <DiscoverText>
            <SideNavMainLink className="menu_nav_link" to="/discover">
              Discover
              <NavIcon>{/* <img src={SearchWhite} alt="Search Movie List"></img> */}</NavIcon>
            </SideNavMainLink>
          </DiscoverText>
          <SideNavHeader>
            <HeaderText>Watched</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/watched/movies">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/watched/tv-shows">
            Tv Shows
          </NavLink>
          <SideNavHeader>
            <HeaderText>Saved</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/saved/movies">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/saved/tv-shows">
            Tv Shows
          </NavLink>
        </SideNavBarCont>
      )}
    </>
  );
}

const BurgerIcon = styled.img`
  height: 25px;
  width: 25px;
  border: 0;
`;

// const CrossIcon = styled.img`
//   height: 25px;
//   width: 25px;
//   border: 0;
// `;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
`;

const DiscoverText = styled.div`
  margin: 15px 0;
  background-color: ${colors.primaryColor};
`;
