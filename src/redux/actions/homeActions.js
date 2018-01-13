import { fromJS } from "immutable";
import request from "../../utils/request";
import ActionConstants from "../constants";

// const ListURL = "/items.json";
const DescriptionsUrl = "/data/item-descriptions.json";

export const setListItems = items => ({
  type: ActionConstants.SET_LIST_ITEMS,
  payload: fromJS(items),
});

export function fetchItems() {
  return dispatch => {
    request(DescriptionsUrl)
      .then(items => {
        dispatch(setListItems(items.payload));
      })
      .catch(err => {
        console.error(err); // eslint-disable-line
      });
  };
}

export const setSelected = index => ({
  type: ActionConstants.SET_SELECTED_ITEM,
  payload: index,
});
