import { useUserContext } from "../../Context";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { LikedVideoCard } from "./LikedVideoCard";

export function LikedVideos() {
  const {
    userState: { likedVideos },
    userDispatch,
  } = useUserContext();
  useDocumentTitle("Liked | FitTV");

  return (
    <div className="liked-videos-container pos-relative">
      <h2 className="txt-center txt-white mg-md-bottom">
        Liked Videos ({likedVideos.length})
      </h2>
      {likedVideos.length == 0 && (
        <div className="empty-videos">You haven't liked any videos yet....</div>
      )}
      <section className="videos-list flex-box">
        {likedVideos.map((video) => (
          <LikedVideoCard
            key={video._id}
            video={video}
            userDispatch={userDispatch}
          />
        ))}
      </section>
    </div>
  );
}
