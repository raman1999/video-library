import { createContext, useContext } from "react";
import { useReducer } from "react";
import { userReducer } from "../Reducer/userData-reducer";
const UserDataContext = createContext();

const initialArgs = {
  likedVideos: [],
  history: [],
  playlists: [],
  watchLater: [],
};

export const UserDataProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialArgs);

  return (
    <UserDataContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserContext = () => useContext(UserDataContext);
