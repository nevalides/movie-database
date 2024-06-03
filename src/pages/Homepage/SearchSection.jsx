import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useRef } from "react";

const SearchSection = () => {
  const { changeQuery } = useQuery();
  const inputSearch = useRef();
  const navigate = useNavigate();

  function handleSearch(value) {
    changeQuery({ query: value });
    navigate(`/search?query=${value}`)
  }

  function handleInput(e) {
    if (e.key === 'Enter') handleSearch(inputSearch.current.value)
  }

  return (
    <section className="h-[calc(100vh/2.5)] min-h-[300px] max-h-[360px] bg-main-greeting bg-cover bg-no-repeat text-white">
      <div className="h-full flex content-center items-center justify-center flex-wrap">
        <div className="flex items-start justify-center">
          <div className="flex flex-wrap items-start content-start px-10 py-7.5">
            <div className="mb-5">
              <h2 className="text-5xl font-bold">Welcome to Movie Database</h2>
              <h3 className="text-[2em] font-semibold">
                Discover millions of movies, TV shows, and peoples. Explore Now.
              </h3>
            </div>
            <div className="w-full mt-5">
              <div className="flex gap-2 rounded-[30px] bg-white">
                <input
                  type="text"
                  ref={inputSearch}
                  placeholder="Search for a movie, tv show, person....."
                  className="ml-6 grow text-black bg-transparent focus:outline-none"
                  onKeyDown={handleInput}
                />
                <button
                  className="px-6 py-2.5 font-bold rounded-[30px] bg-gradient-to-r from-tertiary-color to-secondary-color"
                  onClick={() => handleSearch(inputSearch.current.value)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
