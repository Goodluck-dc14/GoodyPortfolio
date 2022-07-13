import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = ({ clr, good, textColor, iconColor }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
        borderBottom: good,
      }}
    >
      <Logo
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        Goodluck
      </Logo>
      <Wrapper style={{ color: textColor }}>
        <Link
          offset={-80}
          activeClass="active"
          to="Home"
          smooth={true}
          duration={1000}
        >
          <span>Home</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="About"
          smooth={true}
          duration={1000}
        >
          <span>About</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Services"
          smooth={true}
          duration={1000}
        >
          <span>Services</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Projects"
          smooth={true}
          duration={1000}
        >
          <span>Projects</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Contact"
          smooth={true}
          duration={1000}
        >
          <span>Contact</span>
        </Link>
      </Wrapper>
      <Holder style={{ color: iconColor }}>
        <Menu
          onClick={() => {
            document.getElementById("nav").style.width = "200px";
          }}
        >
          <FiMenu />
        </Menu>
      </Holder>
      <Sidebar myId="nav" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  transition: all 1000ms;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  span {
    margin-right: 70px;
    font-size: 17px;
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1);
    font-weight: 400;

    @media screen and (max-width: 1024px) {
      margin-right: 50px;
    }
  }
`;

const Logo = styled.div`
  width: 100px;
  color: rgba(54, 193, 87, 0.7);
  object-fit: contain;
  font-size: 30px;
  font-weight: bold;
  margin: 0 50px;
`;

const Menu = styled(FiMenu)`
  cursor: pointer;
  font-size: 40px;
  margin-right: 30px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Holder = styled.div`
  @media screen and (min-width: 770px) {
    display: none;
  }
`;
