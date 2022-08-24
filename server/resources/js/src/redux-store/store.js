import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/Reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(reducers, enhancer);

export default store;
