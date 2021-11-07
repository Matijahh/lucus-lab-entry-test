import { combineReducers } from "redux";

import Login from "./login/reducer";
import Posts from "./posts/reducer";
import Gallery from "./gallery/reducer";
import Todo from "./todo/reducer";

const rootReducer = combineReducers({
  Login,
  Posts,
  Gallery,
  Todo,
});

export default rootReducer;
