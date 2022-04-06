import "./videos.css";
import { useEffect } from "react";
import { useFilterContext } from "../../Context";
import { VideoFilter } from "./VideoFilter";
import { getFilterVideos } from "../../Utils";
import { VideoCard } from "./VideoCard";
import { LoadingSpinner } from "../../Components";
import { UseGetAxios } from "../../Hooks/UseGetAxios";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

export function VideoListing() {
  const { filterState, filterDispatch } = useFilterContext();

  const {
    serverData: { videos },
    isLoading,
  } = UseGetAxios("/api/videos");

  useEffect(() => {
    filterDispatch({ type: "SET_VIDEOS", payload: videos });
  }, [videos]);
  useDocumentTitle("Explore | FitTV");
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
          {filterVideos.length == 0 && (
            <div className="no-videos-found txt-center">
              No videos matched your search . Type Something else..
            </div>
          )}
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
