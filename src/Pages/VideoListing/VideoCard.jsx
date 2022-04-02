import { useUserContext, useAuthenticationContext } from "../../Context";
import { updateLikedVideos, updateWatchLater } from "../../Services";
import { Link, useNavigate } from "react-router-dom";
import { isItemInArray } from "../../Utils";

export function VideoCard({ video }) {
  const { title, creator, _id, category } = video;
  const thumbnail = `https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`;

  const {
    userState: { likedVideos, watchLater },
    userDispatch,
  } = useUserContext();
  const { login } = useAuthenticationContext();
  const navigate = useNavigate();
  const isVideoInLikeList = isItemInArray(likedVideos, _id);
  const isVideoInWatchLater = isItemInArray(watchLater, _id);

  return (
    <div className="card video-card txt-left">
      <Link to={`/videos/${_id}`} className="link-no-style">
        <img className="card-img" src={thumbnail} alt={category} />
        <p className="heading-5 l-sp-1 txt-white txt-bold pd-sm-left ee">
          {title.length > 25 ? `${title.slice(0, 25)}...` : title}
        </p>
        <span className="txt-gray pd-sm-left">{creator}</span>
      </Link>

      <div className="pd-sm-left txt-right">
        <i
          className={`fas fa-thumbs-up ${isVideoInLikeList && "selected-icon"}`}
          onClick={() =>
            login
              ? !isVideoInLikeList
                ? updateLikedVideos("ADD_TO_LIKELIST", video, userDispatch)
                : updateLikedVideos("REMOVE_FROM_LIKELIST", video, userDispatch)
              : navigate("/login")
          }
        ></i>
        <i
          className={`fas fa-bookmark pd-sm-left ${
            isVideoInWatchLater && "selected-icon"
          }`}
          onClick={() =>
            login
              ? !isVideoInWatchLater
                ? updateWatchLater("ADD_TO_WATCH_LATER", video, userDispatch)
                : updateWatchLater(
                    "REMOVE_FROM_WATCH_LATER",
                    video,
                    userDispatch
                  )
              : navigate("/login")
          }
        ></i>
      </div>
    </div>
  );
}
