import { updatePlaylist } from "../../Services";
import { Link } from "react-router-dom";

export function PlaylistCard({ playlist, userDispatch }) {
  const { title, description, _id } = playlist;

  return (
    <div className="card playlist-card">
      <Link
        to={`/videos/playlists/${_id}`}
        className="link-no-style playlist-card-link"
      >
        <p className="heading-4 l-sp-1 txt-white txt-bold pd-sm-left">
          {title}
        </p>
        <span className="txt-gray pd-sm-left">{description}</span>
      </Link>
      <div className="trash-container txt-right">
        <i
          className="fas fa-trash-alt trash-icon"
          onClick={() =>
            updatePlaylist("DELETE_FROM_PLAYLISTS", _id, userDispatch)
          }
        ></i>
      </div>
    </div>
  );
}
