import { fromJS } from "immutable";
import ActionConstants from "../constants";

const initialState = fromJS({
  listItems: [],
});
const ListItems = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.SET_LIST_ITEMS:
      return state.set("listItems", action.payload);
    default:
      return state;
  }
};

export default ListItems;
