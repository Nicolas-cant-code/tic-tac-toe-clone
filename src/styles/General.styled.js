import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  font-size: 4rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const SubTitle = styled.h2`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 200;
  background-color: transparent;
`;
