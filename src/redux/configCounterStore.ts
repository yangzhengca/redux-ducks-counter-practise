import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter"

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer);

export default store;
