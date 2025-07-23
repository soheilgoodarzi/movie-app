import { Search } from 'lucide-react';

const SearchInput = ({ query, setQuery, isMobile = false }) => {
  const placeholderText = isMobile
    ? "Search..." 
    : "Search for a movie, TV Show or celebrity you are looking for";

  const containerClasses = isMobile
    ? "h-10 border-green-500 border-2 rounded-full overflow-hidden " 
    : "h-14 border-2 border-green-500 rounded-full";

  return (
    <div className={`w-full flex items-center gap-3 px-4 bg-transparent ${containerClasses}`}>
      <input
        type="text"
        placeholder={placeholderText}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 h-full bg-transparent outline-none placeholder:text-gray-400 hover:placeholder:text-white transition-all duration-500 text-white"
      />
      <Search className="text-gray-400 hover:text-white transition-all duration-300" />
    </div>
  );
};

export default SearchInput;
