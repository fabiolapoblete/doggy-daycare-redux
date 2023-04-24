import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import ourDogsReducer from "./reducers/ourDogsReducer";

const store = createStore(
  //Här ska en reducer in
  ourDogsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
