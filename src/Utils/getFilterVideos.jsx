export const getFilterVideos = (state) => {
  const { categoryFilter, originalVideos, searchValue } = state;
  let filterVideos = originalVideos;
  if (categoryFilter !== "All Videos") {
    filterVideos = filterVideos.filter(
      (video) => video.category === categoryFilter
    );
  }
  if (searchValue) {
    filterVideos = filterVideos.filter(
      (videoItem) =>
        videoItem.title.toLowerCase().includes(searchValue) ||
        videoItem.creator.toLowerCase().includes(searchValue)
    );
  }

  return filterVideos;
};
