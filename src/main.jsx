import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Global from "./Global.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ThemeProvider } from "styled-components";

import { forest } from "./utils/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={forest}>
      <App />
      <Global />
    </ThemeProvider>
  </Provider>
);
