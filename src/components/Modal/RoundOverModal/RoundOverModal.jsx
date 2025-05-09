import React, { useContext } from "react";
import { Title, SubTitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import { ButtonWrapper } from "../../Button/Button.styled";
import { GameContext } from "../../../context/GameContext";
import { ModalContext } from "../../../context/ModalContext";

const RoundOverModal = ({ winnerMessage }) => {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title color="primary">{winnerMessage}</Title>
      </ModalHeader>
      <ModalBody>
        <SubTitle color="primary">
          {game.player1.name} with {game.player2.choice}: {game.player1.score}
        </SubTitle>
        <SubTitle color="primary">
          {game.player2.name} with {game.player1.choice}: {game.player2.score}
        </SubTitle>
        <SubTitle color="primary">Choices will be switched now</SubTitle>
      </ModalBody>

      <ModalFooter>
        <ButtonWrapper
          color="green"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </ButtonWrapper>
        <ButtonWrapper>Restart</ButtonWrapper>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
