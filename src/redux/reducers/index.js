import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
  sidebarReducer: sidebarReducer,
});

export default rootReducer;
