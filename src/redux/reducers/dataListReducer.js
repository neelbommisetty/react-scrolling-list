import { fromJS } from "immutable";

const initialState = fromJS([]);
const ListItems = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListItems;
