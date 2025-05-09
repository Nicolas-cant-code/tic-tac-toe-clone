import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.cream};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  height: 10rem;
  width: 10rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.tertiary};
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 2rem;

  .outlineIcon {
    display: none;
    fill: ${(props) => props.theme.colors.secondary};
    stroke: ${(props) => props.theme.colors.primary};

    path {
      stroke: ${(props) => props.theme.colors.primary};
    }
  }

  .oIcon {
    path {
      fill: ${(props) => props.theme.colors.primary};
      stroke: ${(props) => props.theme.colors.primary};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    transform: scale(1.025);
    .outlineIcon {
      transition: 0s;
      display: block;
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.primary};
    width: 100%;
    height: 100%;
  }
`;
