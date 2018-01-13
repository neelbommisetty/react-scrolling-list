import { combineReducers } from "redux";
import ListItems from "./dataListReducer";

const rootReducer = combineReducers({
  listItems: ListItems,
});

export default rootReducer;
