import "./videos.css";
import { useEffect } from "react";
import { useFilterContext } from "../../Context";
import { VideoFilter } from "./VideoFilter";
import { getFilterVideos } from "../../Utils";
import { VideoCard } from "./VideoCard";
import { LoadingSpinner } from "../../Components";
import { UseGetAxios } from "../../Hooks/UseGetAxios";

export function VideoListing() {
  const { filterState, filterDispatch } = useFilterContext();

  const {
    serverData: { videos },
    isLoading,
  } = UseGetAxios("/api/videos");

  useEffect(() => {
    filterDispatch({ type: "SET_VIDEOS", payload: videos });
  }, [videos]);

  const filterVideos = !isLoading ? getFilterVideos(filterState) : [];

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="video-container">
          <VideoFilter />
          <section className="videos-list flex-box">
            {filterVideos?.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
