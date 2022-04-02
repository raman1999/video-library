import { useUserContext } from "../../Context";
import { LikedVideoCard } from "./LikedVideoCard";

export function LikedVideos() {
  const { userState, userDispatch } = useUserContext();
  return (
    <div className="liked-videos-container">
      <h2 className="txt-center txt-white mg-md-bottom">
        Liked Videos ({userState.likedVideos.length})
      </h2>
      <section className="videos-list flex-box">
        {userState.likedVideos.map((video) => (
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
