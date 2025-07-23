import { Video } from "lucide-react";
import { ImgURL } from "../../helpers/ImgUrl";
import { Link } from "react-router-dom";

const MovieItems = ({ data }) => {
  return (
    <Link
      to={`/movies/${data.id}`}
      className="flex items-center gap-2 border-b border-gray-200 pb-3 transition-all group duration-300 hover:border-green-500">
      <div>
        {data?.poster_path === null ? (
          <div className="rounded-full flex items-center justify-center h-[30px] w-[30px] md:h-[50px] md:w-[50px] bg-user">
            <Video className="text-gray-400" size={25} />
          </div>
        ) : (
          <img
            className="rounded-full  md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-cover group-hover:scale-105"
            src={ImgURL("w154", data.poster_path)}
          />
        )}
      </div>
      <span className="md:text-xl text-sm font-medium text-gray-300 group-hover:text-white">{data.name || data.title}</span>
    </Link>
  );
};

export default MovieItems;
