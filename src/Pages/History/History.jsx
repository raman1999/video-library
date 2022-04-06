import { useUserContext } from "../../Context";
import { HistoryVideoCard } from "./HistoryVideoCard";
import "./history_videos.css";
import { updateHistory } from "../../Services";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

export function History() {
  const {
    userState: { history },
    userDispatch,
  } = useUserContext();
  useDocumentTitle("History | FitTV");

  return (
    <div className="history-container pos-relative">
      <h2 className="txt-center txt-white mg-md-bottom">
        Watched Videos ({history.length})
      </h2>
      {history.length > 0 && (
        <button
          className="btn-clear-history bg-color txt-white shadow-white"
          onClick={() => updateHistory("CLEAR_HISTORY", "", userDispatch)}
        >
          Clear History
        </button>
      )}
      {history.length == 0 && (
        <div className="empty-videos">
          You haven't watched any videos yet....
        </div>
      )}
      <section className="videos-list flex-box">
        {history.map((video) => (
          <HistoryVideoCard
            key={video._id}
            video={video}
            userDispatch={userDispatch}
          />
        ))}
      </section>
    </div>
  );
}
