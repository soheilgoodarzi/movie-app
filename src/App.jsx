import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import MobileBottomNav from "./components/layout/MobileBottomNav"

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/login"
  const isHomePage = location.pathname === "/"

  const backgroundColor = "bg-slate-900"

  const mainClasses = isLoginPage
    ? "h-screen flex items-center justify-center"
    : isHomePage
    ? "pb-24 md:pb-6"
    : "container mx-auto px-4 py-6 pb-24 md:pb-6"

  return (
    <div
      className={`${
        !isHomePage ? backgroundColor : ""
      } min-h-screen text-white`}
    >
      {!isLoginPage && <Header />}

      <main className={mainClasses}>
        <Outlet />
      </main>

      {!isLoginPage && <MobileBottomNav />}
    </div>
  )
}

export default App
