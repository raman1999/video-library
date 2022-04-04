import { useUserContext } from "../../Context";
import { PlaylistCard } from "./PlaylistCard";
import "./playlist.css";
import { useState } from "react";
import { PlaylistModal } from "../../Components";

export function Playlist() {
  const {
    userState: { playlists },
    userDispatch,
  } = useUserContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="playlist-container pos-relative">
      <h2 className="txt-center txt-white mg-md-bottom">
        Playlists ({playlists.length})
      </h2>
      <button
        className="btn btn-create-playlist bg-color txt-white shadow-white"
        onClick={() => setShowModal(!showModal)}
      >
        Create new playlist
      </button>
      {playlists.length == 0 && (
        <div className="empty-videos">
          You haven't added any playlist yet....
        </div>
      )}
      {showModal && <PlaylistModal setShowModal={setShowModal} />}
      <section className="videos-list flex-box">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            playlist={playlist}
            userDispatch={userDispatch}
          />
        ))}
      </section>
    </div>
  );
}
