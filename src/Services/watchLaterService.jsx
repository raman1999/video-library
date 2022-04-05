import axios from "axios";
import { toast } from "react-toastify";
export async function updateWatchLater(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  try {
    switch (type) {
      case "ADD_TO_WATCH_LATER":
        var { data } = await axios.post(
          `/api/user/watchlater`,
          { video: payload },
          postHeader
        );
        dispatch({
          type: "SET_WATCH_LATER",
          payload: data.watchlater,
        });
        toast.success("Added to WatchLater");
        break;

      case "REMOVE_FROM_WATCH_LATER":
        var { data } = await axios.delete(
          `/api/user/watchlater/${payload._id}`,
          postHeader
        );
        dispatch({
          type: "SET_WATCH_LATER",
          payload: data.watchlater,
        });
        toast.success("Removed from WatchLater");
        break;
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to update Likelist..." });
  }
}
