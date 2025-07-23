import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { apiClient } from "../../services/apiConfig";
import PersonItems from "../searchItems/PersonItems";
import TvItems from "../searchItems/TvItems";
import MovieItems from "../searchItems/MovieItems";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);


  useEffect(() => {
    const search = setTimeout(async () => {
      if (query) {
        const { data } = await apiClient("/search/multi", {
          params: { query },
        });
        setSearchData(data.results);
      } else {
        setSearchData([]);
      }
    }, 400);

    return () => {
      clearTimeout(search);
    };
  }, [query]);

  function ShowSearchItem(item) {
    if (item.media_type === "person") return <PersonItems data={item} />;
    else if (item.media_type === "tv") return <TvItems data={item} />;
    else if (item.media_type === "movie") return <MovieItems data={item} />;
  }

  return (
    <div  className="relative">
    <div className="w-full max-w-2xl mx-auto mt-9 h-14 flex items-center gap-3 border-2 border-green-500 rounded-full px-5 bg-transparent mb-2">
  <input
    type="text"
    placeholder="Search for a movie, TV Show or celebrity you are looking for"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-1 h-full bg-transparent outline-none placeholder:text-gray-400 text-white"
  />
  <Search className="text-white" />
      </div>
      <div
        className={`absolute max-w-2xl searchBg mx-auto shadow-2xl overflow-y-auto transition-all rounded-lg duration-500 ${
          searchData.length && query.length ? "h-64" : "h-0"
        }`}
      >
        <div
          className="text-white p-5 flex flex-col gap-3"
          onClick={() => setSearchData([])}
        >
          {searchData?.map((item) => ShowSearchItem(item))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
