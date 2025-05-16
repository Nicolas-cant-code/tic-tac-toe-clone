import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Provider from "./context";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
