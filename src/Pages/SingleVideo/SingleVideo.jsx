import { useNavigate, useParams } from "react-router-dom";
import { useAuthenticationContext, useUserContext } from "../../Context";
import "./single_video.css";
import {
  updateHistory,
  updateLikedVideos,
  updateWatchLater,
} from "../../Services";
import ReactPlayer from "react-player";
import { AddToPlaylistContainer, LoadingSpinner } from "../../Components";
import { useState } from "react";
import { UseGetAxios } from "../../Hooks/UseGetAxios";
import { toast } from "react-toastify";
import { isItemInArray } from "../../Utils";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

export function SingleVideo() {
  const {
    userState: { likedVideos, watchLater },
    userDispatch,
  } = useUserContext();
  const { login } = useAuthenticationContext();
  const { videoId } = useParams();
  const {
    serverData: { video },
    isLoading,
  } = UseGetAxios(`/api/video/${videoId}`);
  const navigate = useNavigate();
  useDocumentTitle("VideoDetails | FitTV");
  const isVideoInLikeList = isItemInArray(likedVideos, videoId);
  const isVideoInWatchLater = isItemInArray(watchLater, videoId);
  const [playlistToggle, setPlaylistToggle] = useState(false);

  function NotLoggedIn() {
    toast("Please Login in first");
    navigate("/login");
  }

  return (
    <>
      {isLoading ? (
        <div className="loader-container-1">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="single-video-container flex-column">
          <div className="single-video">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls={true}
              playing={true}
              width={"100%"}
              height={"100%"}
              onStart={() =>
                login
                  ? updateHistory("ADD_TO_HISTORY", video, userDispatch)
                  : toast("Please login to enjoy our services")
              }
            />
          </div>
          <p className="heading-4 l-sp-1 txt-white txt-bold">{video.title}</p>
          <span className="txt-gray">{video.creator}</span>
          <div className="action-buttons-container flex-row">
            <i
              className={`fas  fa-lg fa-thumbs-up ${
                isVideoInLikeList && "selected-icon"
              }`}
              onClick={() =>
                login
                  ? !isVideoInLikeList
                    ? updateLikedVideos("ADD_TO_LIKELIST", video, userDispatch)
                    : updateLikedVideos(
                        "REMOVE_FROM_LIKELIST",
                        video,
                        userDispatch
                      )
                  : NotLoggedIn()
              }
            ></i>
            <i
              className={`fas fa-bookmark fa-lg ${
                isVideoInWatchLater && "selected-icon"
              }`}
              onClick={() =>
                login
                  ? !isVideoInWatchLater
                    ? updateWatchLater(
                        "ADD_TO_WATCH_LATER",
                        video,
                        userDispatch
                      )
                    : updateWatchLater(
                        "REMOVE_FROM_WATCH_LATER",
                        video,
                        userDispatch
                      )
                  : NotLoggedIn()
              }
            ></i>
            <span className="pos-relative">
              <i
                className="fas fa-lg fa-folder-plus"
                onClick={() =>
                  login ? setPlaylistToggle((prev) => !prev) : NotLoggedIn()
                }
              ></i>
              {playlistToggle && (
                <AddToPlaylistContainer videoDetails={video} />
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
