import { Link } from "react-router-dom"
import PersonItems from "../searchItems/PersonItems"
import TvItems from "../searchItems/TvItems"
import MovieItems from "../searchItems/MovieItems"

const SearchResults = ({ searchData, query, setSearchData }) => {
  function ShowSearchItem(item) {
    if (item.media_type === "person") return <PersonItems data={item} />
    else if (item.media_type === "tv") return <TvItems data={item} />
    else if (item.media_type === "movie") return <MovieItems data={item} />
    return null
  }

  const getLinkPath = (item) => {
    switch (item.media_type) {
      case "movie":
        return `/movies/${item.id}`
      case "tv":
        return `/tvshow/${item.id}`
      case "person":
        return `/people/${item.id}`
      default:
        return "/"
    }
  }

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-full max-w-2xl  shadow-2xl overflow-y-auto transition-all rounded-lg duration-500 z-20 custom-scrollbar ${
        searchData.length && query.length
          ? "h-auto md:max-h-52 xs:max-h-28 sm:max-h-40 lg:max-h-60 "
          : "h-0"
      }`}
    >
      <div className="text-white flex flex-col gap-1 p-2 ">
        {searchData?.map((item) => (
          <Link
            key={item.id}
            to={getLinkPath(item)}
            onClick={() => setSearchData([])}
            className="block cursor-pointer mb-1 rounded-md transition-colors md:h-16 h-11"
          >
            {ShowSearchItem(item)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
