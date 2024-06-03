import { useCallback, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { useFetch } from "../../hooks/useFetch";
import ListCard from "../../components/ListCard";
import { useQuery } from "../../hooks/useQuery";
import PeopleCastCard from "../../components/PeopleCastCard";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const SearchDiscover = ({ title }) => {
    document.title = title
    const { searchQuery } = useQuery();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get('query')
    const inputSearch = useRef();
    const queryParams = { query: searchQuery.query ?? searchParams }

    const { data, error, status, setParams } = useFetch(
        `/search/multi`,
        {
            page: 1,
            query: queryParams.query
        },
        useCallback(
            (data) => ({
                data: data?.results,
            }),
            []
        )
    );

    console.log(searchParams);
    console.log(queryParams);

    useEffect(() => {
        setParams(prevQuery => ({ ...prevQuery, ...queryParams }));
    }, [searchQuery]);

    return (
        <main className="mx-auto flex flex-col max-w-7xl items-center justify-center">
            <div
                id="titleList"
                className="w-full mt-10 px-8 flex flex-col items-start content-start justify-center gap-6"
            >
                <h2 className="text-4xl font-bold">{`Find: ${queryParams?.query}`}</h2>
                <div className="w-full flex justify-end">
                    <div className="w-full max-w-sm">
                        <form
                            className="flex gap-2 rounded-[30px] border-solid border-black border px-6 py-2"
                            action=""
                        >
                            <input
                                type="text"
                                ref={inputSearch}
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
                    data?.map((item, index) => {
                        if (item.media_type !== 'person') {
                            return <ListCard media={item.media_type} key={index} data={item} noDate />
                        } else {
                            return <PeopleCastCard key={index} data={item} noCharacter />
                        }
                    })}
            </div>
        </main>
    );
};

export default SearchDiscover;
