import "./playlist-modal.css";
import { useUserContext } from "../../Context";
import { useState } from "react";
import { updatePlaylist } from "../../Services";
export function PlaylistModal({ setShowModal }) {
  const [playlistInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });

  const { userDispatch } = useUserContext();
  function modalFormHandler(e) {
    e.preventDefault();
    setShowModal(false);
    updatePlaylist("ADD_TO_PLAYLISTS", playlistInfo, userDispatch);
  }

  function playlistHandler(e) {
    const { name, value } = e.target;
    setPlaylistInfo((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <div className="modal-container" style={{ display: "block" }}>
        <form className="card modal-content" onSubmit={modalFormHandler}>
          <input
            className="bg-color"
            placeholder="enter title"
            name="title"
            required
            onChange={playlistHandler}
          />

          <input
            placeholder="enter description"
            name="description"
            onChange={playlistHandler}
          />

          <button
            type="submit"
            className="btn-add txt-white bg-color shadow-white"
          >
            Add
          </button>
          <i
            className="btn-cancel fas fa-times fa-lg"
            onClick={() => setShowModal(false)}
          ></i>
        </form>
      </div>
    </>
  );
}
