import { useEffect, useState } from "react"
import Navigation from "./Navigation"
import SearchResults from "./SearchResults"
import { apiClient } from "../../services/apiConfig"

const Header = () => {
  const [query, setQuery] = useState("")
  const [searchData, setSearchData] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const search = setTimeout(async () => {
      if (query) {
        const { data } = await apiClient("/search/multi", { params: { query } })
        setSearchData(data.results)
      } else {
        setSearchData([])
      }
    }, 400)
    return () => clearTimeout(search)
  }, [query])

  return (
    <div className="w-full relative">
      <header
        className={`py-4 sticky w-full top-0 z-30 transition-colors duration-300 ${
          isScrolled ? "bg-slate-900" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 md:mx-auto md:px-3">
          <Navigation query={query} setQuery={setQuery} />
        </div>
      </header>
      <div className="container mx-auto px-3 relative">
        <SearchResults
          searchData={searchData}
          query={query}
          setSearchData={setSearchData}
        />
      </div>
    </div>
  )
}

export default Header
