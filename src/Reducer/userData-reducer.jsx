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
    case "UPDATE_PLAYLIST_AFTER_VIDEO_ACTION":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload._id ? payload : playlist
        ),
      };

    default:
      return state;
  }
}
