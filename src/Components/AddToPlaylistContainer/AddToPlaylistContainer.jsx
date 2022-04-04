import { useState } from "react";
import { useUserContext } from "../../Context";
import { updatePlaylist } from "../../Services";
import { PlaylistModal } from "../index";
import "./playlist_container.css";

export function AddToPlaylistContainer({ videoDetails }) {
  const {
    userState: { playlists },
    userDispatch,
  } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  function isAlreadyAdded(arr, id) {
    return arr.some((item) => item._id === id);
  }
  return (
    <>
      <span className="add_to_playlist_container flex-column shadow-white">
        {playlists.map((playlist) => (
          <span
            key={playlist._id}
            onClick={() =>
              !isAlreadyAdded(playlist.videos, videoDetails._id)
                ? updatePlaylist(
                    "ADD_VIDEO_TO_PLAYLIST",
                    { id: playlist._id, video: videoDetails },
                    userDispatch
                  )
                : updatePlaylist(
                    "REMOVE_VIDEO_FROM_PLAYLIST",
                    { playlistId: playlist._id, videoId: videoDetails._id },
                    userDispatch
                  )
            }
          >
            <i
              className={
                isAlreadyAdded(playlist.videos, videoDetails._id)
                  ? "fas fa-check"
                  : "fas fa-plus"
              }
            ></i>
            <span className="pd-sm-left">
              {playlist.title.length > 17
                ? `${playlist.title.slice(0, 17)}..`
                : playlist.title}
            </span>
          </span>
        ))}
        <span onClick={() => setShowModal(true)}>
          <i className="fas fa-plus-circle"></i>
          <span className="pd-sm-left"> Add new Playlist</span>
        </span>
      </span>
      {showModal && <PlaylistModal setShowModal={setShowModal} />}
    </>
  );
}
