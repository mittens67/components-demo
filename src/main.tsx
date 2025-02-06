import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store/store";
import App from "./App";


const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", 
    },
    secondary: {
      main: "#FF6F61", 
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensures consistent baseline styles */}
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
