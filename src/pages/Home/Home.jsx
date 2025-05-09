import React from "react";
import { Container } from "../../styles/General.styled";
import { SubTitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>Tic Tac Toe</Title>
      <SubTitle>Play with your friends and see who wins!</SubTitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
