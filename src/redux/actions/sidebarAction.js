import { SELECT_TOOLBAR_ICON } from "../types/sidebarType";

export const shopSelect = (selectedTool) => {
  return {
    type: SELECT_TOOLBAR_ICON,
    selectedTool,
  };
};
