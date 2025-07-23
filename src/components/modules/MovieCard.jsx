
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, rate, poster, id, mode }) => {
  const imageUrl = poster
    ? `https://image.tmdb.org/t/p/w500/${poster}`
    : 'https://placehold.co/500x750/1a202c/ffffff?text=No+Image';

  return (
    <Link 
      to={`/${mode === "movie" ? "movies" : "tvshow"}/${id}`} 
      className="flex flex-col gap-2 shadow-md shadow-slate-800 p-2 rounded-xl transition-all duration-150 hover:shadow-lg hover:shadow-slate-700 group"
    >
      <div className="overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <span className="text-sm text-center font-semibold line-clamp-1">
        {title}
      </span>
      
      <div className="flex items-center justify-center mt-auto pt-1">
        <div className="flex items-center gap-1 text-xs font-bold">
          <Star size={16} className="text-green-500" />
          <span>{rate ? rate.toFixed(1) : 'N/A'} / 10</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
