import { Link } from "react-router-dom";
import { ImgURL } from "../../helpers/ImgUrl";
import { User } from "lucide-react";

const PersonItems = ({ data }) => {
  return (
    <Link
      to={`/people/${data.id}`}
      className="flex items-center gap-2 border-b border-yellow-100 pb-3 transition-all group duration-300 hover:border-green-500"
    >
      <div>
        {data?.profile_path === null ? (
          <div className="rounded-full flex items-center justify-center h-[30px] w-[30px] md:h-[50px] md:w-[50px] bg-user">
            <User className="text-gray-400" size={25} />
          </div>
        ) : (
          <img
            className="rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px] object-cover group-hover:scale-105"
            src={ImgURL("w154", data.profile_path)}
          />
        )}
      </div>
      <span className="md:text-xl text-sm font-medium text-gray-300 group-hover:text-white">{data.name || data.title}</span>
    </Link>
  );
};

export default PersonItems;
