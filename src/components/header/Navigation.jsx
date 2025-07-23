import { CircleUserRound } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"
import { ImgURL } from "../../helpers/ImgUrl"
import SearchInput from "./SearchInput"

const Navigation = ({ query, setQuery }) => {
  const { user, logout } = useUserContext()

  const menuItem = [
    { title: "Movies", href: "/movies" },
    { title: "Tv Shows", href: "/tvshow" },
  ]

  const UserActions = () => {
    return Object.keys(user).length ? (
      <div className="flex items-center gap-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="btn flex flex-row py-2 px-5 cursor-pointer bg-gray-800 hover:bg-gray-700 border-none"
          >
            <div className="flex items-center justify-center overflow-hidden rounded-full w-8 h-8 border border-green-500 hover:border-green-700 transition-all duration-1000">
              {user?.avatar?.tmdb?.avatar_path ? (
                <img
                  src={ImgURL("w45", user?.avatar?.tmdb?.avatar_path)}
                  alt={user.username}
                />
              ) : (
                <CircleUserRound />
              )}
            </div>
            <span>{user.username}</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        <button
          className="bg-green-600 text-white py-2 px-5 rounded-lg transition duration-200 hover:bg-green-800"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    ) : (
      <ul className="flex items-center gap-3 lg:gap-6 uppercase">
        <li>
          <Link
            to={"/login"}
            className="hover:text-white text-slate-300 transition-colors duration-300"
          >
            LOGIN
          </Link>
        </li>
        <li>
          <Link
            to={"https://www.themoviedb.org/signup"}
            className="bg-green-500 text-white px-4 lg:px-7 py-2 lg:py-3 rounded-full hover:bg-green-700 transition-color duration-500"
          >
            SIGN UP
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className="flex items-center justify-between text-slate-200">
      <div className="hidden md:flex w-full items-center gap-4">
        <div className="flex flex-1 justify-start whitespace-nowrap">
          <div className="flex items-center gap-3 lg:gap-5">
            <Link
              to={"/"}
              className="flex items-center gap-1 text-lg md:text-3xl font-bold"
            >
              <span className="text-slate-400 hover:text-white">Sow</span>
              <span className="text-green-500 hover:text-green-700">
                Movies
              </span>
            </Link>
            <ul className="flex items-center gap-5">
              {menuItem.map((menu) => (
                <li key={menu.title} className="w-20">
                  <NavLink
                    to={menu.href}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b border-green-500 text-green-500 font-bold"
                        : "text-slate-400 hover:text-white transition-colors duration-300"
                    }
                  >
                    {menu.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 justify-center px-4 min-w-0">
          <div className="w-full max-w-lg mx-auto">
            <SearchInput query={query} setQuery={setQuery} />
          </div>
        </div>
        <div className="flex flex-1 justify-end whitespace-nowrap">
          <UserActions />
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-4 md:hidden">
        <div className="flex flex-shrink-0">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-lg md:text-2xl font-bold"
          >
            <span className="text-slate-300">Sow</span>
            <span className="text-green-500">Movies</span>
          </Link>
        </div>
        <div className="w-1/2 md:flex-1 ">
          <SearchInput query={query} setQuery={setQuery} isMobile={true} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
