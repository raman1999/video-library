import { useUserContext } from "../../Context";
import { WatchLaterCard } from "./WatchLaterCard";

export function WatchLater() {
  const {
    userState: { watchLater },
    userDispatch,
  } = useUserContext();

  return (
    <div className="watch-later-container pos-relative">
      <h2 className="txt-center txt-white mg-md-bottom">
        Saved Videos ({watchLater.length})
      </h2>
      {watchLater.length == 0 && (
        <div className="empty-videos">You haven't saved any videos yet....</div>
      )}
      <section className="videos-list flex-box">
        {watchLater.map((video) => (
          <WatchLaterCard
            key={video._id}
            video={video}
            userDispatch={userDispatch}
          />
        ))}
      </section>
    </div>
  );
}
