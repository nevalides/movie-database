import React, { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard";

const Trending = () => {
  const [trendingTime, setTrendingTime] = useState("day");

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
  }, [trendingTime]);

  const handleClick = (time) => {
    setTrendingTime(time);
  };

  let todayClass = "selector rounded-[30px]";
  let weekClass = "selector rounded-[30px]";

  if (trendingTime === "day") {
    todayClass += " selected";
  } else {
    weekClass += " selected";
  }

  return (
    <section id="trending" className="w-full max-w-7xl pt-[30px] mb-0">
      <div className="flex flex-wrap items-start content-start justify-start p-0">
        <div className="flex items-center justify-start px-10">
          <h2 className="text-xl font-semibold mr-5">Trending</h2>
          <div className="flex justify-start items-stretch border-[1px] border-solid border-tmdb-dark-blue rounded-[30px]">
            <button className={todayClass} onClick={() => handleClick("day")}>
              <h3 className="inline-flex items-center justify-center px-5 py-1 text-base font-semibold">
                <p>Today</p>
              </h3>
            </button>
            <button className={weekClass} onClick={() => handleClick("week")}>
              <h3 className="inline-flex items-center justify-center px-5 py-1 text-base font-semibold">
                <p>This week</p>
              </h3>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start content-start overflow-hidden">
          <div className="flex items-start justify-start py-5 gap-5 overflow-x-scroll overflow-y-hidden px-10">
            {status === "resolved" &&
              data?.map((movie) => <MovieCard key={movie.id} data={movie} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
