import { useEffect, useState } from "react"
import{Star}from "lucide-react"
import { useUserContext } from "../context/UserContext"
import { apiClient } from "../services/apiConfig"
import { ImgURL } from "../helpers/ImgUrl"
import { Link, NavLink } from "react-router-dom"
import LoaderSpinner from "../components/LoaderSpinner"
const Movies = () => {
  const tabsListForMovie = [
    { name: "Popular", path: "popular" },
    { name: "Top Rated", path: "top_rated" },
    { name: "Upcoming", path: "upcoming" },
    { name: "Now Playing", path: "now_playing" },
  ]

  const [chooseCategory, setChooseCategory] = useState("popular")
  const [movieData, setMovieData] = useState([])
  const { loading, setLoading } = useUserContext()

  console.log(movieData)

  const getMovies = async () => {
    setLoading(true)
    await apiClient.get(`/movie/${chooseCategory}`).then((res) => {
      if (res.status === 200) {
        setMovieData(res.data.results)
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    getMovies()
  }, [chooseCategory])

  return (
    <div className="flex flex-col gap-8 md:mt-64 mt-36">
      <h1 className="text-center font-semibold text-3xl text-gray-300 hover:text-white">
        <NavLink to="/movies">Movie Lists</NavLink>
      </h1>

      <div className="flex w-full items-center justify-start md:justify-center gap-5 overflow-x-auto no-scrollbar">
        {tabsListForMovie?.map((movie, index) => (
          <NavLink
            className={`${
              chooseCategory === movie.path
                ? "text-green-500 border-b border-green-500 "
                : "text-gray-300 hover:text-white"
            } whitespace-nowrap text-center py-2 px-4 transition-colors duration-200 hover:text-white`}
            key={index}
            onClick={() => setChooseCategory(movie.path)}
          >
            {movie.name}
          </NavLink>
        ))}
      </div>
      <div>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {movieData?.map((item) => (
              <Link
                key={item.id}
                to={`/movies/${item?.id}`}
                className="flex flex-col gap-2 shadow-md shadow-slate-800 p-2 rounded-xl transition-all duration-150 hover:shadow-lg hover:shadow-slate-700 group"
              >
                <div className="overflow-hidden rounded-lg">
                <img
                  src={ImgURL("w780", item?.poster_path)}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </div>
                <span className="text-sm text-center font-semibold line-clamp-1">
                  {item?.name || item?.title}
                </span>
                <p className="hidden text-sm text-center font-semibold line-clamp-1 text-nowrap">
                  {item?.overview}
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-1 text-xs font-bold -mt-2">
                    <Star size={16} className="text-green-500" />
                    <span>{item?.vote_average ? item?.vote_average.toFixed(1) : "N/A"} / 10</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Movies
