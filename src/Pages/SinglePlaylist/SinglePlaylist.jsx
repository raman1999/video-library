import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../Context";
import { SinglePlaylistCard } from "./SinglePlaylistCard";
export function SinglePlaylist() {
  const {
    userState: { playlists },
    userDispatch,
  } = useUserContext();
  const { playlistId } = useParams();

  const playlistDetails = playlists.find(
    (playlist) => playlist._id === playlistId
  );
  const { videos } = playlistDetails;

  return (
    <div className="single-playlist-container pos-relative">
      <h2 className="txt-center txt-white mg-md-bottom">
        Playlist Videos ({videos.length})
      </h2>
      {videos.length == 0 && (
        <div className="empty-videos">
          You haven't added any video to playlist yet...
        </div>
      )}
      <section className="videos-list flex-box">
        {videos.map((video) => (
          <SinglePlaylistCard
            key={video._id}
            video={video}
            playlistId={playlistId}
            userDispatch={userDispatch}
          />
        ))}
      </section>
    </div>
  );
}
