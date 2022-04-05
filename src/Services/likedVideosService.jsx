import axios from "axios";
import { toast } from "react-toastify";

export async function updateLikedVideos(type, payload, dispatch) {
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };
  try {
    switch (type) {
      case "ADD_TO_LIKELIST":
        var { data } = await axios.post(
          `/api/user/likes`,
          { video: payload },
          postHeader
        );
        dispatch({
          type: "SET_LIKES",
          payload: data.likes,
        });
        toast.success("Added to liked videos...");
        break;

      case "REMOVE_FROM_LIKELIST":
        var { data } = await axios.delete(
          `/api/user/likes/${payload._id}`,
          postHeader
        );
        dispatch({
          type: "SET_LIKES",
          payload: data.likes,
        });
        toast.success("Removed from liked videos...");
        break;
    }
  } catch (err) {
    toast.error("Server Error! Try again later..");
  }
}
