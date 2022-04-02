import { useFilterContext } from "../../Context";
import { useState } from "react";
export function VideoFilter() {
  const { filterState, filterDispatch } = useFilterContext();
  const { originalVideos, categoryFilter } = filterState;
  const [searchTxt, setSearchTxt] = useState("");

  const getUnique = (value, index, item) => item.indexOf(value) === index;
  const categories = ["All Videos"].concat(
    originalVideos.map((video) => video.category).filter(getUnique)
  );

  function searchHandler(e) {
    if (e.keyCode === 13) {
      filterDispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
    }
  }

  return (
    <div className="filter-list">
      <div className="search-field-container flex-row">
        <span className="search-field">
          <input
            className="txt-input bg-color shadow-white txt-white"
            type="text"
            placeholder="Search your videos"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
            onKeyDown={searchHandler}
          />
          <i
            className="fas fa-search search-icon"
            onClick={() => {
              filterDispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
            }}
          ></i>
        </span>
        <button
          type="button"
          className="bg-color txt-white shadow-white"
          onClick={() => {
            setSearchTxt("");
            filterDispatch({ type: "CLEAR_SEARCH" });
          }}
        >
          Clear Search
        </button>
      </div>

      {categories.map((category) => (
        <button
          className={`btn btn-category txt-white  bg-color ${
            categoryFilter === category && "selected-category"
          }`}
          key={category}
          onClick={() =>
            filterDispatch({ type: "SET_CATEGORY", payload: category })
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}
