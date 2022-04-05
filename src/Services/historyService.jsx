import axios from "axios";
import { toast } from "react-toastify";

export async function updateHistory(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  try {
    switch (type) {
      case "ADD_TO_HISTORY":
        var { data } = await axios.post(
          `/api/user/history`,
          { video: payload },
          postHeader
        );
        dispatch({
          type: "SET_HISTORY",
          payload: data.history,
        });
        break;

      case "REMOVE_FROM_HISTORY":
      case "CLEAR_HISTORY":
        var { data } = await axios.delete(
          `/api/user/history/${type === "CLEAR_HISTORY" ? "all" : payload._id}`,
          postHeader
        );
        dispatch({
          type: "SET_HISTORY",
          payload: data.history,
        });
        toast.success("History updated successfully");
        break;
    }
  } catch (err) {
    toast.error("Server error! Try again later..");
  }
}
