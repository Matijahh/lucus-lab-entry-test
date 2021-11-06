import { combineReducers } from "redux";

import Login from "./login/reducer";
import Todo from "./todo/reducer";
import Gallery from "./gallery/reducer";

const rootReducer = combineReducers({
  Login,
  Todo,
  Gallery,
});

export default rootReducer;
