
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiClient } from "../services/apiConfig";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setQuery("");
    setSearchData([]);
  }, [location.pathname]);

  useEffect(() => {
    const search = setTimeout(async () => {
      if (query) {
        const { data } = await apiClient("/search/multi", { params: { query } });
        setSearchData(data.results);
      } else {
        setSearchData([]);
      }
    }, 400);

    return () => clearTimeout(search);
  }, [query]);

  const value = { query, setQuery, searchData, setSearchData };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
