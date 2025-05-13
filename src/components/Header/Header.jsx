import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderWrapper, DarkModeIcon, LightModeIcon } from "./Header.styled";
import Logo from "../../assets/svgs/tic-tac-toe-game.svg?react";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../context/SoundEffectsContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { hoverSfx } = useContext(SfxContext);
  const { clickSfx } = useContext(SfxContext);

  return (
    <HeaderWrapper>
      <Logo
        className="logo"
        onClick={() => {
          navigate("/");
        }}
        onMouseEnter={() => hoverSfx()}
      />
      <span
        onClick={() => {
          toggleTheme();
          clickSfx();
        }}
        onMouseEnter={() => hoverSfx()}
        style={{ cursor: "pointer" }}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
