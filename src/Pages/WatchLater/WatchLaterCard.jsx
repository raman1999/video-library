import { updateWatchLater } from "../../Services";
import { Link } from "react-router-dom";
export function WatchLaterCard({ video, userDispatch }) {
  const { _id, title, category, creator } = video;

  return (
    <div className="card video-card txt-left">
      <Link to={`/videos/${_id}`} className="link-no-style">
        <img
          className="card-img"
          src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          alt={category}
        />
        <p className="heading-5 l-sp-1 txt-white txt-bold pd-sm-left">
          {title.length > 25 ? `${title.slice(0, 25)}...` : title}
        </p>
        <span className="txt-gray pd-sm-left">{creator}</span>
      </Link>

      <div className="trash-container txt-right">
        <i
          className="fas fa-trash-alt trash-icon"
          onClick={() =>
            updateWatchLater("REMOVE_FROM_WATCH_LATER", video, userDispatch)
          }
        ></i>
      </div>
    </div>
  );
}
