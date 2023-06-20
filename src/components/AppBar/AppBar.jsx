import { useState } from "react";
import {
  AppBarContainer,
  AppBarWrapper,
  Logo,
  HamburgerMenu,
  MainNavigation,
  ItemContainer,
  ItemContainerIcon,
  ContactInfo,
  HAmburgetMenuClose
} from "./AppBar.styled";

const AppBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AppBarContainer
      style={{
        backgroundColor: isActive ? "#15023a" : "white",
        color: isActive ? "white" : "#15023a",
      }}
    >
      <AppBarWrapper>
        <MainNavigation>
          <Logo href="#intro">Full Stack</Logo>
          <ItemContainer>
            <ItemContainerIcon />
            <ContactInfo>096 (400)-91-30</ContactInfo>
          </ItemContainer>
          <ItemContainer>
            <ItemContainerIcon />
            <ContactInfo>rossgaluzinskiy@gmail.com</ContactInfo>
          </ItemContainer>
        </MainNavigation>
        <div>
          {isActive ? (
            <HAmburgetMenuClose
              onClick={() => setIsActive((prev) => !prev)}
              style={{ color: isActive ? "white" : "#15023a" }}
            />
          ) : (
            <HamburgerMenu
              onClick={() => setIsActive((prev) => !prev)}
              style={{ color: isActive ? "white" : "#15023a" }}
            />
          )}
        </div>
      </AppBarWrapper>
    </AppBarContainer>
  );
};

export default AppBar;
