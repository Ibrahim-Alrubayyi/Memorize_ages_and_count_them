import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/Reducers";
import reduxThunk from "redux-thunk";
// const enhancer =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
