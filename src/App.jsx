import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { useLocation } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const isHomeScreen = location.pathname === "/";

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
      <MusicPlayer isHomeScreen={isHomeScreen} />
    </ThemeProvider>
  );
}

export default App;
