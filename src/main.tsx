import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store/store";
import App from "./App";

// Define a custom theme (optional)
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", // Blue
    },
    secondary: {
      main: "#FF6F61", // Red
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
