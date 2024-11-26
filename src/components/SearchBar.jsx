import React, { useEffect } from "react";
import SearchIndex from "../jsons/SearchIndex.json";
import poster404 from "../assets/poster404.png";

function SearchBar() {
  const [search, setSearch] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    console.log(search);
    if (search.trim().length > 0) {
      const filteredResults = SearchIndex.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filteredResults);

      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <div className="md:w-[300px] w-full px-6 ">
      <input
        className={`w-full h-full  text-sm font-light bg-transparent border border-white/10 py-2 px-4 rounded-md`}
        placeholder="Search for movies around you.."
        onChange={(e) => {
          setSearch(e.target.value);
          setIsSearching(true);
          setTimeout(() => {
            setIsSearching(false);
          }, 2000);
        }}
        value={search}
      />
      {results.length > 0 && (
        <div className="absolute left-0 w-full md:px-28 px-0 md:mt-4 mt-0 max-h-[60vh] overflow-y-auto">
          <div className="bg-black border-gray-600 rounded-xl px-4 py-2 mt-2 w-full shadow-2xl">
            {results.map((result, i) => (
              <div
                key={i}
                className="px-2 my-4 cursor-pointer flex items-center hover:bg-white/10 rounded-lg"
              >
                <img className="h-20 w-14" src={result.poster ? result.poster : poster404} alt="" />
                <div className="ml-4">
                  <h1 className="text-lg font-medium">{result.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
