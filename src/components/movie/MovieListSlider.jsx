
import MovieCard from "../modules/MovieCard";
import { useEffect, useState } from "react";
import { apiClient } from "../../services/apiConfig";
import { useUserContext } from "../../context/UserContext";
import ShowSkeletoon from "../skeleton/ShowSkeletoon";

const MovieListSlider = ({ mode, activeTab }) => {
  const [movies, setMovies] = useState([]);
  const { loading, setLoading } = useUserContext();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await apiClient(`/${mode}/${activeTab}`);
        setMovies(result.data.results);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [mode, activeTab]);

  return (
    <div>
      {loading ? (
        <ShowSkeletoon />
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies?.map((item) => (
            <MovieCard
              key={item.id} 
              mode={mode}
              title={item.title || item.name}
              id={item.id}
              poster={item.poster_path}
              rate={item.vote_average}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieListSlider;
