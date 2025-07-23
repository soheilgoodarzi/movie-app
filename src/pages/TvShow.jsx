
import { useEffect, useState } from "react";
import {Star} from "lucide-react";
import { apiClient } from "../services/apiConfig";
import { useUserContext } from "../context/UserContext";
import LoaderSpinner from "../components/LoaderSpinner";
import { Link, NavLink } from "react-router-dom";
import { ImgURL } from "../helpers/ImgUrl";

const TvShow = () => {
  const tabsListForTV = [
    { name: "Popular", path: "popular" },
    { name: "Airing Today", path: "airing_today" },
    { name: "On The Air", path: "on_the_air" },
    { name: "Top Rated", path: "top_rated" }, // Top Rated را هم اضافه کردم
  ];

  const [tvData, setTvData] = useState([]);
  const [tvCategory, setTvCategory] = useState("popular");
  const { loading, setLoading } = useUserContext();

  const getTvShow = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/tv/${tvCategory}`);
      if (res.status === 200) {
        setTvData(res.data.results);
      }
    } catch (error) {
      console.error("Failed to fetch TV shows:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTvShow();
  }, [tvCategory]);

  return (
    <div className="flex flex-col gap-8 md:mt-64 mt-36">
      <h1 className="text-center font-semibold text-3xl text-gray-300 hover:text-white transition-colors duration-300">
        <NavLink to="/tvshow">TvShow Lists</NavLink>
      </h1>

      <div className="flex w-full items-center justify-start md:justify-center gap-5 overflow-x-auto no-scrollbar">
        {tabsListForTV?.map((tv, index) => (
          <NavLink
            className={`${
              tvCategory === tv.path
                ? "text-green-500 border-b-2 border-green-500"
                : "text-gray-400 "
            } 
            whitespace-nowrap text-center py-2 px-4 transition-colors duration-200 hover:text-white`}
            key={index}
            onClick={() => setTvCategory(tv.path)}
          >
            {tv.name}
          </NavLink>
        ))}
      </div>

      <div>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {tvData?.map((item) => (
              <Link
                key={item.id}
                to={`/tvshow/${item?.id}`}
                className="flex flex-col gap-2 shadow-md shadow-slate-800 p-2 rounded-xl transition-all duration-150 hover:shadow-lg hover:shadow-slate-700 group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img src={ImgURL("w780", item?.poster_path)} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" alt={item?.name || item?.title} />
                </div>
                <span className="text-xs text-center font-semibold line-clamp-1 mb-2">
                  {item?.name || item?.title}
                </span>
                <p className="hidden line-clamp-1 text-justify text-sm text-gray-300">
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
  );
};

export default TvShow;