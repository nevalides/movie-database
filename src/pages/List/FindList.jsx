import { useCallback, useContext, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Button from "../../components/Button";
import { useFetch } from "../../hooks/useFetch";
import ListCard from "../../components/ListCard";
import { useParams, useSearchParams } from "react-router-dom";
import { MENU } from "../../config/config";
import PeopleCastCard from "../../components/PeopleCastCard";
import { useQuery } from "../../hooks/useQuery";

const FindList = ({ title }) => {
  document.title = title
  const { mediaType } = useParams();
  // const [searchQuery, setSearchQuery] = useSearchParams();
  // searchQuery.get("query");
  // const [titlePage, setTitlePage] = useState("");
  const { searchQuery } = useQuery();
  const [menuSelect, setMenuSelect] = useState({
    mediaType,
    category: MENU[mediaType][0].path,
  });

  const buttonList = MENU[mediaType];

  const { data, error, status, fetchData } = useFetch(
    `/${menuSelect.mediaType}/${menuSelect.category}`,
    { page: 1 },
    useCallback(
      (data) => ({
        data: data?.results,
      }),
      []
    )
  );

  useEffect(() => {
    fetchData();
  }, [fetchData, menuSelect]);

  let titlePage;

  if (mediaType === "movie") {
    titlePage = `Find Movie${searchQuery.query && searchQuery.query.trim() !== '' ? `: ${queryParams.query}` : ''}`;
  } else if (mediaType === "tv") {
    titlePage = `Find TV Shows${searchQuery.query && searchQuery.query.trim() !== '' ? `: ${queryParams.query}` : ''}`;
  } else if (mediaType === "person") {
    titlePage = `Find People${searchQuery.query && searchQuery.query.trim() !== '' ? `: ${queryParams.query}` : ''}`;
  }

  useEffect(() => {
    setMenuSelect({
      mediaType,
      category: MENU[mediaType][0].path,
    });
  }, [mediaType]);

  const handleMenuSelect = (value) => {
    setMenuSelect((prevMenuSelect) => ({
      ...prevMenuSelect,
      category: value,
    }));
  };

  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-center">
      <div
        id="titleList"
        className="w-full mt-10 px-8 flex flex-col items-start content-start justify-center gap-6"
      >
        <h2 className="text-4xl font-bold">{titlePage}</h2>
        <div className="w-full flex items-center justify-between">
          <nav className="flex items-center justify-center gap-2">
            {buttonList.map((button, index) => (
              <Button
                key={index}
                mediaType={mediaType}
                onClick={() => handleMenuSelect(button.path)}
              >
                {button.name}
              </Button>
            ))}
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
          mediaType !== "person" &&
          data.map((movie) => <ListCard media={menuSelect.mediaType} key={movie.id} data={movie} />)}
        {status === "resolved" &&
          mediaType === "person" &&
          data.map((people) => (
            <PeopleCastCard key={people.id} data={people} />
          ))}
      </div>
    </main>
  );
};

export default FindList;
