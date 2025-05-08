import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderWrapper, DarkModeIcon, LightModeIcon } from "./Header.styled";
import Logo from "../../assets/svgs/tic-tac-toe-game.svg?react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")} />
      <span onClick={toggleTheme} style={{ cursor: "pointer" }}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
