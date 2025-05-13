import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { SubTitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../context/SoundEffectsContext";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx } = useContext(SfxContext);
  const { clickSfx } = useContext(SfxContext);

  return (
    <Container columnBased>
      <Title>Tic Tac Toe</Title>
      <SubTitle>Play with your friends and see who wins!</SubTitle>
      <Button
        onClick={() => {
          navigate("/game-on");
          clickSfx();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
