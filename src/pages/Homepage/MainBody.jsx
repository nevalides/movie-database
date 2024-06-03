import {
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import SearchSection from "./SearchSection";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard";
import { DbContext } from "../../store/db-context";
import { useNavigate } from "react-router-dom";
import Trending from "./Trending";

const MainBody = () => {
  // const { isLogin, favList } = useContext(DbContext);
  // const navigate = useNavigate();
  const [trendingTime, setTrendingTime] = useState("day");

  const isLogin = false;
  const favList = [];

  const { data, error, status, fetchData } = useFetch(
    `/trending/all/${trendingTime}`,
    {},
    useCallback(
      (data) => ({
        data: data?.results,
      }),
      []
    )
  );

  useEffect(() => {
    fetchData();
  }, [fetchData, trendingTime]);

  const handleClick = (time) => {
    setTrendingTime(time);
  };

  // const handleClick = () => {
  //   if (trendingTime === "day") {
  //     setTrendingTime("week");
  //   } else {
  //     setTrendingTime("day");
  //   }
  // };

  // const handleSearch = () => {
  //   const enteredSearch = inputSearch.current.value;
  // };

  // let todayClass = "selector rounded-[30px]";
  // let weekClass = "selector rounded-[30px]";

  // if (trendingTime === "day") {
  //   todayClass += " selected";
  // } else {
  //   weekClass += " selected";
  // }

  let trenData = [];

  if (status === "resolved") {
    trenData = [data[12], data[4], data[13], data[7]];
  }

  // console.log(status);
  // console.log(data);
  // console.log(trenData);

  return (
    <main className="w-full mx-auto flex flex-col max-w-7xl items-center justify-center">
      <SearchSection />
      <Trending data={data} changeTime={handleClick} time={trendingTime} status={status} />
      <section
        id="recommendation"
        className="w-full flex items-center justify-center gap-20 px-20 py-10 bg-gradient-to-r from-vibrant-light-blue to-tmdb-dark-blue text-white"
      >
        <div className="flex flex-wrap">
          <h2 className="text-5xl font-bold">You might like this too...</h2>
        </div>
        <div className="flex items-start justify-start gap-5">
          {trenData.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </section>
      {isLogin && (
        <section id="favorite" className="w-full max-w-7xl pt-[30px] mb-0">
          <div className="flex flex-wrap items-start content-start justify-start p-0">
            <div className="flex items-center justify-start px-10">
              <h2 className="text-xl font-semibold mr-5">Your Favorite</h2>
            </div>
            <div className="flex flex-wrap justify-center items-start content-start overflow-hidden">
              <div className="flex items-start justify-start py-5 gap-5 overflow-x-scroll overflow-y-hidden px-10">
                {status === "resolved" &&
                  favList.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default MainBody;
