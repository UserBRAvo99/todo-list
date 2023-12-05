import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Global from "./Global.js";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { ThemeProvider } from "styled-components";

import { forest } from "./utils/theme.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={forest}>
        <App />
        <Global />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
