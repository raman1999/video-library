import { useParams } from "react-router-dom";
import { useUserContext } from "../../Context";
import "./single_video.css";
import { updateHistory } from "../../Services";
import ReactPlayer from "react-player";
import { AddToPlaylistContainer, LoadingSpinner } from "../../Components";
import { useState } from "react";
import { UseGetAxios } from "../../Hooks/UseGetAxios";

export function SingleVideo() {
  const { userDispatch } = useUserContext();
  const { videoId } = useParams();
  const {
    serverData: { video },
    isLoading,
  } = UseGetAxios(`/api/video/${videoId}`);
  const [playlistToggle, setPlaylistToggle] = useState(false);
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
              width={"60%"}
              height={"60vh"}
              onStart={() =>
                updateHistory("ADD_TO_HISTORY", video, userDispatch)
              }
            />
          </div>
          <p className="heading-4 l-sp-1 txt-white txt-bold">{video.title}</p>
          <span className="txt-gray">{video.creator}</span>
          <div className="action-buttons-container flex-row">
            <i className="fas fa-lg fa-thumbs-up"></i>
            <i className="fas fa-lg fa-bookmark"></i>
            <span className="pos-relative">
              <i
                className="fas fa-lg fa-folder-plus"
                onClick={() => setPlaylistToggle((prev) => !prev)}
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
