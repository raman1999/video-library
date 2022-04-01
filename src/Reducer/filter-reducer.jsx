export function filterReducer(state, { type, payload }) {
  switch (type) {
    case "SET_CATEGORY":
      return {
        ...state,
        categoryFilter: payload,
      };

    case "SEARCH_PRODUCT":
      return { ...state, searchValue: payload };

    case "CLEAR_SEARCH":
      return {
        ...state,
        searchValue: "",
      };
    case "SET_VIDEOS":
      return { ...state, originalVideos: payload };

    default:
      return state;
  }
}
