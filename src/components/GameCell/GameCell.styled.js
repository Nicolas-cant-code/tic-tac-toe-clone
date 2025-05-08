import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  height: 10rem;
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.tertiary};
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    transform: scale(1.025);
  }
`;
