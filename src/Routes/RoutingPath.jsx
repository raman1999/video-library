import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  VideoListing,
  LikedVideos,
  History,
  NotFound,
  Playlist,
  SinglePlaylist,
  SingleVideo,
  WatchLater,
} from "../Pages";
import { VideoGrid } from "../Components";

export function RoutingPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/videos" element={<VideoGrid />}>
        <Route path="explore" element={<VideoListing />} />
        <Route path="liked" element={<LikedVideos />} />
        <Route path="history" element={<History />} />
        <Route path="watchlater" element={<WatchLater />} />
        <Route path="playlists" element={<Playlist />} />
        <Route path="playlists/:playlistId" element={<SinglePlaylist />} />
      </Route>
      <Route path="/videos/:videoId" element={<SingleVideo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
