import styled from "styled-components";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.text};

  svg {
    fill: ${(props) => props.theme.colors.text};
  }

  .logo {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.colors.text};
  //   width: 2rem;
  //   height: 2rem;
  //   cursor: pointer;
  font-size: 2rem;
`;

export const LightModeIcon = styled(MdLightMode)`
  //   width: 2rem;
  //   height: 2rem;
  //   cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
`;
