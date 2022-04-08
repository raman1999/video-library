import { createContext, useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { userReducer } from "../Reducer/userData-reducer";
import { useAuthenticationContext } from "./AuthenticationProvider";
import { useEffect } from "react";
const UserDataContext = createContext();

const initialArgs = {
  likedVideos: [],
  history: [],
  playlists: [],
  watchLater: [],
};

export const UserDataProvider = ({ children }) => {
  const { login } = useAuthenticationContext();
  const [userState, userDispatch] = useReducer(userReducer, initialArgs);
  const header = { headers: { authorization: localStorage.getItem("token") } };

  useEffect(() => {
    if (login === true) {
      (async () => {
        const {
          data: { likes },
        } = await axios.get("/api/user/likes", header);
        userDispatch({ type: "SET_LIKES", payload: likes });
        const {
          data: { playlists },
        } = await axios.get("/api/user/playlists", header);
        userDispatch({ type: "SET_PLAYLISTS", payload: playlists });
        const {
          data: { history },
        } = await axios.get("/api/user/history", header);
        userDispatch({ type: "SET_HISTORY", payload: history });
        const {
          data: { watchlater },
        } = await axios.get("/api/user/watchlater", header);
        userDispatch({ type: "SET_WATCH_LATER", payload: watchlater });
      })();
    }
  }, [login]);

  return (
    <UserDataContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserContext = () => useContext(UserDataContext);
