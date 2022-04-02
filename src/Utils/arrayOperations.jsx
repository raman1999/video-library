export const isItemInArray = (arr, id) => {
  return arr.some((arrItem) => arrItem._id === id);
};
