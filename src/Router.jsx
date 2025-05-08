import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Game from "./pages/Games/Game";
import Header from "./components/Header/Header";
import { ModalContext } from "./context/ModalContext";

export const Test = ({ handleModal }) => {
  return (
    <div>
      <button onClick={() => handleModal(<Modal />)}>Show Modal</button>
    </div>
  );
};

export const Modal = () => {
  return <div>Modal</div>;
};

const Router = () => {
  const { handleModal } = useContext(ModalContext);

  return (
    <BrowserRouter>
      <Header />
      <Test handleModal={handleModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
