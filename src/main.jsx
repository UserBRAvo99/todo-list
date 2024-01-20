import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider - обгортка для головного файлу, як і в контексті, визначає область роботи
  <Provider store={store}>
    {/*  PersistGate - обгортка для зчитування данних та завантаження їх в локал сторедж*/}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
