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
  PlaylistDetails,
  VideoDetails,
  WatchLater,
} from "../Pages";
import MockMan from "mockman-js";
export function RoutingPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="/explore/:videoId" element={<VideoDetails />} />
      <Route path="/liked" element={<LikedVideos />} />
      <Route path="/history" element={<History />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/playlists" element={<Playlist />} />
      <Route path="/playlists/:playlistId" element={<PlaylistDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
