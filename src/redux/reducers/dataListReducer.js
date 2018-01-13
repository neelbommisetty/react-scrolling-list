import { fromJS } from "immutable";
import ActionConstants from "../constants";

const initialState = fromJS({
  listItems: [],
  selected: -1,
});
const ListItems = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.SET_LIST_ITEMS:
      return state.set("listItems", action.payload);
    case ActionConstants.SET_SELECTED_ITEM:
      return state.set("selected", action.payload);
    default:
      return state;
  }
};

export default ListItems;
