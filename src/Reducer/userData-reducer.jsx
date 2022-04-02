export function userReducer(state, { type, payload }) {
  switch (type) {
    case "SET_PLAYLISTS":
      return { ...state, playlists: payload };

    case "SET_LIKES":
      return { ...state, likedVideos: payload };

    case "SET_HISTORY":
      return { ...state, history: payload };

    case "SET_WATCH_LATER":
      return {
        ...state,
        watchLater: payload,
      };

    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };

    default:
      return state;
  }
}
