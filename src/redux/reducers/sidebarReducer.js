import { SELECT_TOOLBAR_ICON } from "../types/sidebarType";

const initialState = {
  selectedTool: "style",
};

const dateTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TOOLBAR_ICON:
      return {
        ...state,
        selectedTool: action.selectedTool,
      };
    default:
      return state;
  }
};

export default dateTimeReducer;
