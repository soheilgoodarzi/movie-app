import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import MobileBottomNav from "./MobileBottomNav";
import SearchResults from "../header/SearchResults";
import { useSearch } from "../../context/SearchContext";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { searchData, query, setSearchData } = useSearch();

  return (
    <>
      <Header />

      {isHomePage && (
        <div className="container mx-auto px-3 relative">
          <SearchResults
            searchData={searchData}
            query={query}
            setSearchData={setSearchData}
          />
        </div>
      )}

      <main className={isHomePage ? "pb-24 md:pb-6" : "container mx-auto px-4 py-6 pb-24 md:pb-6"}>
        <Outlet /> 
      </main>

      <MobileBottomNav />
    </>
  );
};

export default MainLayout;
