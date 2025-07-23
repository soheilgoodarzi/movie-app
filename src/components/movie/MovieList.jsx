import { useState } from "react";
import { NavLink } from "react-router-dom";
import MovieListSlider from "./MovieListSlider";

const MovieList = () => {
  const [MoviesTab, setMoviesTab] = useState("popular");
  const [tvTab , setTvTab] = useState("popular")

  const tabsListForMovie = [
    { name: "Popular", path: "popular" },
    { name: "Top Rated", path: "top_rated" },
    { name: "Upcoming", path: "upcoming" },
    { name: "Now Playing", path: "now_playing" },
  ];

  const tabsListForTV = [
    { name: "Popular", path: "popular" },
    { name: "Airing Today", path: "airing_today" },
    { name: "On The Air", path: "on_the_air" },
    { name: "Now Playing", path: "now_playing" },
  ];


  function handleChangeTab(tabName) {
    return setMoviesTab(tabName);
  }

  function handleChangeTabTv(tabName){
    setTvTab(tabName)
  }
  return (
    <>
      <div className="my-10 bg-slate-900">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-400 hover:text-white duration-300 transition-colors">
            <NavLink to="/movies">Movies</NavLink>
          </h2>
          <ul className="flex items-center gap-8 overflow-x-auto whitespace-nowrap pb-3 sm:pb-0 mt-4 sm:mt-0">
            {tabsListForMovie?.map((item, index) => (
              <li
                className={`cursor-pointer ${
                  MoviesTab === item.path
                    ? "text-green-500 font-bold border-b border-green-500"
                    : "text-gray-400 hover:text-white"
                }`}
                key={index}
                onClick={() => handleChangeTab(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <MovieListSlider mode="movie" activeTab={MoviesTab} />
      </div>
      <div className="mb-4">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-400 hover:text-white duration-300 transition-colors">
            <NavLink to="/tvshow">Tv Series</NavLink>
          </h2>
          <ul className="flex items-center gap-8 overflow-x-auto whitespace-nowrap pb-3 sm:pb-0 mt-4 sm:mt-0">
          {tabsListForTV?.map((item, index) => (
              <li
                className={`cursor-pointer ${
                  tvTab === item.path
                    ? "text-green-500 font-bold border-b border-green-500"
                    : "text-gray-400 hover:text-white"
                }`}
                key={index}
                onClick={() => handleChangeTabTv(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <MovieListSlider mode="tv" activeTab={tvTab}/>
      </div>
    </>
  );
};

export default MovieList;
