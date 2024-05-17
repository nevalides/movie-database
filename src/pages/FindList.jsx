import React, { useCallback, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Button from "../components/Button";
import { useFetch } from "../hooks/useFetch";
import ListCard from "../components/ListCard";
import { useParams, useSearchParams } from "react-router-dom";

const FindList = () => {
  const { media } = useParams();
  const [searchQuery, setSearchQuery] = useSearchParams();
  searchQuery.get("query");
  const [titlePage, setTitlePage] = useState("");

  const { data, error, status, fetchData } = useFetch(
    `/movie/popular`,
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
  }, []);

  if (media === "movie") {
    setTitlePage("Find Movie");
  } else if (media === "tv") {
    setTitlePage("Find TV Shows");
  } else if (media === "people") {
    setTitlePage("Find People");
  } else {
    setTitlePage(`Find: ${query}`);
  }

  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-center">
      <div
        id="titleList"
        className="w-full mt-10 px-8 flex flex-col items-start content-start justify-center gap-6"
      >
        <h2 className="text-4xl font-bold">{titlePage}</h2>
        <div className="w-full flex items-center justify-between">
          <nav className="flex items-center justify-center gap-2">
            <Button isActive>Popular</Button>
            <Button>Now Playing</Button>
            <Button>Upcoming</Button>
            <Button>Top Rated</Button>
          </nav>
          <div className="w-full max-w-sm">
            <form
              className="flex gap-2 rounded-[30px] border-solid border-black border px-6 py-2"
              action=""
            >
              <input
                type="text"
                placeholder="Search the name here..."
                className="grow text-black bg-transparent focus:outline-none text-xs"
              />
              <button>
                <IoMdSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        id="list"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-12 mt-10 py-5 px-8"
      >
        {status === "resolved" &&
          data.map((movie) => <ListCard key={movie.id} data={movie} />)}
      </div>
    </main>
  );
};

export default FindList;
