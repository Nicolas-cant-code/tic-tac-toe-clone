import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Games/Game";
import Header from "./components/Header/Header";
import { ModalContextProvider } from "./context/ModalContext";

const Router = () => {
  return (
    <ModalContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </ModalContextProvider>
  );
};

export default Router;
