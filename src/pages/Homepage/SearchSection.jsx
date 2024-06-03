import { useContext } from "react";
import { SearchContext } from "../../store/search-context";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const { changeQuery } = useContext(SearchContext);
  const navigate = useNavigate()
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
              <form className="flex gap-2 rounded-[30px] bg-white" action="">
                <input
                  type="text"
                  placeholder="Search for a movie, tv show, person....."
                  className="ml-6 grow text-black bg-transparent focus:outline-none"
                  onChange={(e) => changeQuery(e.target.value)}
                />
                <button
                  className="px-6 py-2.5 font-bold rounded-[30px] bg-gradient-to-r from-tertiary-color to-secondary-color"
                  onClick={() => navigate("/search")}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
