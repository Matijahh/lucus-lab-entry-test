import { combineReducers } from "redux";

import Login from "./login/reducer";
import Gallery from "./gallery/reducer";
import Todo from "./todo/reducer";

const rootReducer = combineReducers({
  Login,
  Gallery,
  Todo,
});

export default rootReducer;
