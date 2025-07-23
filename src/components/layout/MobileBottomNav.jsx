import { Clapperboard, Tv, UserCircle, LogOut, LogIn } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"

const MobileBottomNav = () => {
  const { user, logout } = useUserContext()

  const navLinkClasses = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors ${
      isActive ? "text-green-500" : "text-gray-400 hover:text-white"
    }`

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-2 md:hidden">
      <div className="flex justify-around items-center">
        <NavLink to="/movies" className={navLinkClasses}>
          <Clapperboard size={24} />
          <span className="text-xs">Movies</span>
        </NavLink>

        <NavLink to="/tvshow" className={navLinkClasses}>
          <Tv size={24} />
          <span className="text-xs">TV Shows</span>
        </NavLink>

        {Object.keys(user).length ? (
          <>
            <NavLink to="/profile" className={navLinkClasses}>
              <UserCircle size={24} />
              <span className="text-xs">Profile</span>
            </NavLink>
            <button
              onClick={() => logout()}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-white"
            >
              <LogOut size={24} />
              <span className="text-xs">Logout</span>
            </button>
          </>
        ) : (
          <NavLink to="/login" className={navLinkClasses}>
            <LogIn size={24} />
            <span className="text-xs">Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default MobileBottomNav
