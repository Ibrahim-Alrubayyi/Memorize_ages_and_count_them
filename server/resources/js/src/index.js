import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import "../src/styles/font/stylesheet.css";
import store from "./redux-store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
