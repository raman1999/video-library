import { createContext, useContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../Reducer/filter-reducer";

const FilterContext = createContext();

const initialArgs = {
  originalVideos: [],
  searchValue: "",
  categoryFilter: "All Videos",
};

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialArgs);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
