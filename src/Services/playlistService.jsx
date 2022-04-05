import axios from "axios";
import { toast } from "react-toastify";

export async function updatePlaylist(type, payload, dispatch, navigate) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  try {
    switch (type) {
      case "ADD_TO_PLAYLISTS":
        var { data } = await axios.post(
          `/api/user/playlists`,
          { playlist: payload },
          postHeader
        );
        dispatch({
          type: "SET_PLAYLISTS",
          payload: data.playlists,
        });
        toast.success("Playlist added successfully");
        break;

      case "DELETE_FROM_PLAYLISTS":
        var { data } = await axios.delete(
          `/api/user/playlists/${payload}`,
          postHeader
        );
        dispatch({
          type: "SET_PLAYLISTS",
          payload: data.playlists,
        });
        toast.success("Playlist removed successfully");
        break;

      case "ADD_VIDEO_TO_PLAYLIST":
        var { data } = await axios.post(
          `/api/user/playlists/${payload.id}`,
          { video: payload.video },
          postHeader
        );
        dispatch({
          type: "UPDATE_PLAYLIST_AFTER_VIDEO_ACTION",
          payload: data.playlist,
        });
        toast.success("Video added to playlist");
        break;

      case "REMOVE_VIDEO_FROM_PLAYLIST":
        var { data } = await axios.delete(
          `/api/user/playlists/${payload.playlistId}/${payload.videoId}`,
          postHeader
        );
        dispatch({
          type: "UPDATE_PLAYLIST_AFTER_VIDEO_ACTION",
          payload: data.playlist,
        });
        toast.success("Video removed from playlist");
        break;
    }
  } catch (err) {
    toast.error("Server error! Try again later..");
  }
}
