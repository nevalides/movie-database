import React, { useCallback, useEffect } from "react";
import { BASE_IMG_URL } from "../config";
import { useFetch } from "../hooks/useFetch";
import errorPoster from "../assets/image_error_poster.png";
import errorBackdrop from "../assets/image_error_backdrop.png";
import {
  IoIosArrowRoundForward,
  IoMdHeart,
  IoMdHeartEmpty,
  IoMdOpen,
} from "react-icons/io";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import PeopleCastCard from "../components/PeopleCastCard";

const Detail = () => {
  const { data, error, status, fetchData } = useFetch(
    `/movie/940721`,
    {},
    useCallback(
      (data) => ({
        data: data,
      }),
      []
    )
  );

  const {
    dataPeople,
    error: errorPeople,
    status: statusPeople,
    fetchData: fetchDataPeople,
  } = useFetch(
    `/movie/940721/credits`,
    {},
    useCallback(
      (data) => ({
        dataPeople: {
          casts: data.cast,
          crews: data.crew,
        },
      }),
      []
    )
  );

  useEffect(() => {
    fetchData();
    fetchDataPeople();
  }, []);

  console.log(data);
  console.log(dataPeople);

  let backdropPath;
  let runtimeHours;
  let runtimeMinutes;

  if (status === "resolved") {
    runtimeHours = Math.floor(data.runtime / 60);
    runtimeMinutes = data.runtime - runtimeHours * 60;
  } else {
    runtimeHours = 0;
    runtimeMinutes = 0;
  }

  if (status === "resolved" && data.backdrop_path) {
    backdropPath = `${BASE_IMG_URL}${data.backdrop_path}`;
  } else {
    backdropPath = errorBackdrop;
  }

  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-center bg-white">
      {status === "resolved" && (
        <>
          <section
            id="header-detail"
            className={`w-full bg-cover bg-no-repeat bg-[url('${backdropPath}')]`}
          >
            <div className="flex flex-wrap justify-center bg-gradient-to-r from-color-add-one via-color-add-two to-color-add-two text-white">
              <div className="px-10 py-[30px]">
                <section className="flex flex-nowrap">
                  <div className="h-[450px] w-[300px] min-w-[300px] rounded-lg overflow-hidden">
                    <img
                      src={
                        data.poster_path
                          ? `${BASE_IMG_URL}${data.poster_path}`
                          : errorPoster
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex">
                    <section className="flex flex-wrap items-start content-center pl-10">
                      <div className="w-full flex flex-col mb-6 gap-5">
                        <h2 className="text-h2">{data.title ?? data.name}</h2>
                        <div className="flex gap-2">
                          {/* <span className="inline-flex whitespace-nowrap items-center px-1 pt-[0.06rem] pb-[0.15rem] border border-color-certification-rated text-color-certification-rated rounded-sm mr-[7px]"></span> */}
                          {data.title && (
                            <span className="text-gray-400">
                              {data.release_date}
                            </span>
                          )}
                          {data.title && (
                            <span className="text-white border border-tertiary-color px-2">{`${runtimeHours}h ${runtimeMinutes}m`}</span>
                          )}
                          {data.genres.map((genre) => (
                            <span
                              key={genre.id}
                              className="text-white bg-tertiary-color px-2"
                            >
                              {genre.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center justify-center">
                          <div className="w-[70px] h-[70px] flex p-1 rounded-full bg-[#081c22] text-center items-center justify-center">
                            <div className="flex items-center justify-center font-semibold text-2xl">
                              {Math.round(data.vote_average * 10)}%
                            </div>
                          </div>
                          <p className="font-bold ml-1">User Score</p>
                        </div>
                        <ul className="h-16 mb-5 flex items-center justify-start gap-5 list-none">
                          <li className="w-12 h-12 py-1 inline-flex items-center justify-center rounded-full bg-tmdb-dark-blue">
                            {/* <IoMdHeart /> */}
                            <IoMdHeartEmpty />
                          </li>
                          <li className="w-12 h-12 py-1 inline-flex items-center justify-center rounded-full bg-tmdb-dark-blue">
                            {/* <IoBookmark /> */}
                            <IoBookmarkOutline />
                          </li>
                          <li className="w-12 h-12 py-1 inline-flex items-center justify-center rounded-full bg-tmdb-dark-blue">
                            <IoMdOpen />
                          </li>
                        </ul>
                      </div>
                      <div className="w-full">
                        <h3 className="text-lg italic font-normal">
                          {data.tagline}
                        </h3>
                        <h3 className="mt-2.5 mb-2 text-xl font-semibold">
                          Overview
                        </h3>
                        <div>
                          <p className="text-base font-normal">
                            {data.overview}
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section id="other-detail" className="w-full max-w-7xl mb-0">
            <div className="px-10 py-[30px] flex items-start gap-5">
              <div className="w-[calc(100vw - 80px - 268px)] max-w-5xl flex flex-wrap">
                <section className="w-full pb-[30px]">
                  <h3 className="font-semibold text-2xl mb-5">
                    Top Billed Cast
                  </h3>
                  <div className="flex flex-wrap justify-center items-start content-start overflow-hidden">
                    <div className="flex items-start justify-start gap-5 overflow-x-scroll overflow-y-hidden">
                      {statusPeople === "resolved" &&
                        dataPeople.casts.map((peopleCast, index) => {
                          if (index < 8) {
                            return (
                              <PeopleCastCard
                                key={peopleCast.id}
                                data={peopleCast}
                              />
                            );
                          } else if (index === 8) {
                            return (
                              <div className="w-[150px] min-w-[150px] flex items-center justify-center gap-1">
                                <p className="inline-block text-lg font-semibold">
                                  View more
                                </p>
                                <IoIosArrowRoundForward />
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </section>
                <section></section>
              </div>
              <div className="max-w-[300px] min-w-[260px] w-[260px] flex flex-wrap">
                <section className="w-full flex flex-wrap">
                  <p className="w-full whitespace-normal text-base mb-5">
                    <strong className="block font-semibold">
                      Original Title
                    </strong>
                    {data.original_title}
                  </p>
                  <p className="w-full whitespace-normal text-base mb-5">
                    <strong className="block font-semibold">Status</strong>
                    {data.status}
                  </p>
                  <p className="w-full whitespace-normal text-base mb-5">
                    <strong className="block font-semibold">
                      Original Language
                    </strong>
                    {data.original_language}
                  </p>
                  <p className="w-full whitespace-normal text-base mb-5">
                    <strong className="block font-semibold">Budget</strong>${" "}
                    {data.budget}
                  </p>
                  <p className="w-full whitespace-normal text-base mb-5">
                    <strong className="block font-semibold">Revenue</strong>${" "}
                    {data.revenue}
                  </p>
                </section>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Detail;
