import React from "react";
import { BASE_IMG_URL } from "../config/config";
import errorPoster from "../assets/image_error_poster.png";
import {
  dateFormatter,
  genderConverter,
  turndownMarkup,
} from "../helper/converter";
import Markdown from "react-markdown";
import ListCard from "../components/ListCard";

const DetailPeople = ({ data }) => {
  const knownForMovie = data.combined_credits.cast.filter(
    (media) => media.media_type === "movie"
  );
  const knownForTV = data.combined_credits.cast.filter(
    (media) => media.media_type === "tv"
  );

  return (
    <main className="mx-auto flex max-w-7xl px-10 py-8 gap-8 items-start justify-center bg-white">
      <section className="w-full max-w-[300px] flex flex-col gap-5 items-start justify-center">
        <div className="rounded-lg">
          <img
            className="rounded-lg"
            src={
              data.profile_path
                ? `${BASE_IMG_URL}${data.profile_path}`
                : errorPoster
            }
            alt="profile picture"
          />
        </div>
        <div className="w-full flex flex-wrap gap-2">
          <h3 className="text-xl font-semibold">Personal Info</h3>
          <p className="w-full whitespace-normal text-base mb-5">
            <strong className="block font-semibold">Known For</strong>
            {data.known_for_department}
          </p>
          <p className="w-full whitespace-normal text-base mb-5">
            <strong className="block font-semibold">Known Credits</strong>
            {data.combined_credits.cast.length}
          </p>
          <p className="w-full whitespace-normal text-base mb-5">
            <strong className="block font-semibold">Gender</strong>
            {genderConverter(data.gender)}
          </p>
          <p className="w-full whitespace-normal text-base mb-5">
            <strong className="block font-semibold">Birthday</strong>
            {dateFormatter(data.birthday)}
          </p>
          <p className="w-full whitespace-normal text-base mb-5">
            <strong className="block font-semibold">Place of Birth</strong>
            {data.place_of_birth}
          </p>
          <p className="w-full whitespace-normal text-base mb-5">
            <strong className="block font-semibold">Also Known As</strong>
            {data.also_known_as.map((name, index) => (
              <li className="list-none" key={index}>
                {name}
              </li>
            ))}
          </p>
        </div>
      </section>
      <section className="w-full max-w-[920px] flex flex-col items-start justify-center p-4 gap-5">
        <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
        <div className="mb-2">
          <h3 className="text-xl font-semibold mb-2">Biography</h3>
          <Markdown>
            {turndownMarkup(data.biography.replaceAll("\n", "&nbsp<br>"))}
          </Markdown>
        </div>
        <h3 className="font-semibold text-xl mb-2">Known For</h3>
        {knownForMovie.length !== 0 && (
          <div className="w-full flex flex-wrap gap-2 justify-start items-start content-start overflow-hidden">
            <h4 className="text-lg font-semibold">Movies</h4>
            <div className="flex items-start justify-start gap-5 overflow-x-scroll overflow-y-hidden">
              {knownForMovie
                .sort((a, b) => b.popularity - a.popularity)
                .slice(0, 8)
                .map((movieCast) => (
                  <ListCard key={movieCast.id} data={movieCast} noDate />
                ))}
            </div>
          </div>
        )}
        {knownForTV.length !== 0 && (
          <div className="w-full flex flex-wrap gap-2 justify-start items-start content-start overflow-hidden">
            <h4 className="text-lg font-semibold">TV Shows</h4>
            <div className="flex items-start justify-start gap-5 overflow-x-scroll overflow-y-hidden">
              {knownForTV
                .sort((a, b) => b.popularity - a.popularity)
                .slice(0, 8)
                .map((tvCast) => (
                  <ListCard key={tvCast.id} data={tvCast} noDate />
                ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default DetailPeople;
