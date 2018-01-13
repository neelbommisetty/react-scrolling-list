import { combineReducers } from "redux";
import ListItems from "./dataListReducer";

const rootReducer = combineReducers({
  data: ListItems,
});

export default rootReducer;
