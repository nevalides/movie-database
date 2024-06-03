import { BASE_IMG_URL } from "../../config/config";
import errorPoster from "../../assets/image_error_poster.png";
import errorBackdrop from "../../assets/image_error_backdrop.png";
import {
  IoIosArrowRoundForward,
  IoMdHeart,
  IoMdHeartEmpty,
  IoMdOpen,
} from "react-icons/io";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import ListCard from "../../components/ListCard";
import PeopleCastCard from "../../components/PeopleCastCard";
import { formatterCurrency } from "../../helper/formatter";
import ReviewCard from "../../components/ReviewCard";

const DetailMovieTV = ({ data, media }) => {
  let percentage;
  let dateArray;
  let colorClass;
  let runtimeHours;
  let runtimeMinutes;

  const date = data?.release_date ?? data?.first_air_date;
  dateArray = date?.split("-");
  runtimeHours = Math.floor(data.runtime / 60);
  runtimeMinutes = data?.runtime - runtimeHours * 60;
  percentage = Math.round(data?.vote_average * 10);
  if (percentage >= 75) {
    colorClass = "green";
  } else if (percentage >= 50 && percentage < 75) {
    colorClass = "blue";
  } else if (percentage >= 25 && percentage < 50) {
    colorClass = "orange";
  } else {
    colorClass = "red";
  }

  //   if (status === "resolved") {
  //     const date = data.release_date ?? data.first_air_date;
  //     dateArray = date.split("-");
  //     runtimeHours = Math.floor(data.runtime / 60);
  //     runtimeMinutes = data.runtime - runtimeHours * 60;
  //     percentage = Math.round(data.vote_average * 10);
  //     if (percentage >= 75) {
  //       colorClass = "green";
  //     } else if (percentage >= 50 && percentage < 75) {
  //       colorClass = "blue";
  //     } else if (percentage >= 25 && percentage < 50) {
  //       colorClass = "orange";
  //     } else {
  //       colorClass = "red";
  //     }
  //   }

  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-center bg-white">
      <section id="header-detail" className="w-full">
        <div className="w-full h-[520px] relative">
          <div className="w- full h-full flex flex-wrap justify-center bg-gradient-to-r from-color-add-one via-color-add-two to-color-add-two text-white absolute z-10">
            <div className="px-10 py-[30px]">
              <section className="flex flex-nowrap">
                <div className="h-[450px] w-[300px] min-w-[300px] rounded-lg overflow-hidden">
                  <img
                    src={
                      data?.poster_path
                        ? `${BASE_IMG_URL}${data?.poster_path}`
                        : errorPoster
                    }
                    alt=""
                  />
                </div>
                <div className="flex">
                  <section className="flex flex-wrap items-start content-center pl-10">
                    <div className="w-full flex flex-col mb-6 gap-5">
                      <h2 className="text-h2">{data?.title ?? data?.name}</h2>
                      <div className="flex gap-2">
                        {/* <span className="inline-flex whitespace-nowrap items-center px-1 pt-[0.06rem] pb-[0.15rem] border border-color-certification-rated text-color-certification-rated rounded-sm mr-[7px]"></span> */}
                        {data?.title && (
                          <span className="text-gray-400">
                            {`${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`}
                          </span>
                        )}
                        {data?.title && (
                          <span className="text-white border border-tertiary-color px-2">{`${runtimeHours}h ${runtimeMinutes}m`}</span>
                        )}
                        {data?.genres?.map((genre) => (
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
                        <div className="w-20 max-w-[82px] h-20 max-h-[82px] relative">
                          <svg
                            viewBox="0 0 36 36"
                            className={`circular-chart ${colorClass} absolute z-10 w-full h-full`}
                          >
                            <path
                              className="circle-bg"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="circle"
                              strokeDasharray={`${percentage}, 100`}
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="w-full h-full flex p-1 rounded-full bg-[#081c22] text-center items-center justify-center">
                            <div className="flex items-center justify-center font-semibold text-2xl">
                              {percentage}%
                            </div>
                          </div>
                        </div>
                        <p className="font-bold ml-2">User Score</p>
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
                        {`"${data?.tagline}"`}
                      </h3>
                      <h3 className="mt-2.5 mb-2 text-xl font-semibold">
                        Overview
                      </h3>
                      <div>
                        <p className="text-base font-normal">{data?.overview}</p>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src={
              data?.backdrop_path
                ? `${BASE_IMG_URL}${data.backdrop_path}`
                : errorBackdrop
            }
            alt=""
          />
        </div>
      </section>
      <section id="other-detail" className="w-full max-w-7xl mb-0">
        <div className="px-10 py-[30px] flex items-start gap-5">
          <div className="w-full max-w-[920px] flex flex-wrap">
            <section className="flex flex-col w-full pb-8 overflow-hidden">
              <h3 className="font-semibold text-2xl mb-5">Top Billed Cast</h3>
              <ol className="flex items-start justify-start px-2 pb-4 gap-5 overflow-x-scroll overflow-y-hidden">
                {data?.credits?.cast.map((peopleCast, index) => {
                  if (index < 8) {
                    return (
                      <PeopleCastCard key={peopleCast.id} data={peopleCast} />
                    );
                  } else if (index === 8) {
                    return (
                      <div
                        className="w-[150px] min-w-[150px] h-full flex items-center justify-center gap-1"
                        key={index}
                      >
                        <p className="text-[16px] font-semibold">
                          View more
                        </p>
                        <IoIosArrowRoundForward className="h-6 w-6" />
                      </div>
                    );
                  }
                })}
              </ol>
            </section>
            <section className="w-full pb-8">
              <h3 className="font-semibold text-2xl mb-5">Reviews</h3>
              <div className="mb-8">
                <form className="flex flex-col items-end justify-center gap-4">
                  <textarea
                    className="w-full h-20 max-h-40 p-2 bg-white border border-solid border-black rounded-lg"
                    name="reviewInput"
                    id="reviewInput"
                    placeholder="Write your review here..."
                  />
                  <button className="px-6 py-2 rounded-full font-semibold bg-primary-color text-white">
                    Submit
                  </button>
                </form>
              </div>
              <div className="flex flex-wrap justify-center items-start content-start overflow-hidden border border-solid border-black">
                <div className="flex flex-col max-h-80 items-start justify-start gap-5 p-4 overflow-x-hidden overflow-y-scroll">
                  {data?.reviews?.results?.length !== 0 &&
                    data?.reviews?.results?.map((review, index) => {
                      if (index === 0) {
                        return <ReviewCard key={review.id} data={review} />;
                      } else {
                        return (
                          <ReviewCard
                            key={review.id}
                            style=" pt-4 border-t border-solid border-black"
                            data={review}
                          />
                        );
                      }
                    })}
                  {data?.reviews?.results?.length === 0 && (
                    <p className="my-8 text-center text-lg">
                      There are no reviews here.
                    </p>
                  )}
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full pb-8 overflow-hidden">
              <h3 className="font-semibold text-2xl mb-5">Recommendations</h3>
              <ol className="flex items-start justify-start px-2 pb-4 gap-5 overflow-x-scroll overflow-y-hidden">
                {data?.recommendations?.results.map((recommendation, index) =>
                  <ListCard key={index} data={recommendation} media={media} noDate />
                )}
              </ol>
            </section>
          </div>
          <div className="max-w-[300px] min-w-[260px] w-[260px] flex flex-wrap">
            <section className="w-full flex flex-wrap">
              <p className="w-full whitespace-normal text-base mb-5">
                <strong className="block font-semibold">Original Title</strong>
                {data?.original_title ?? data?.original_name}
              </p>
              <p className="w-full whitespace-normal text-base mb-5">
                <strong className="block font-semibold">Status</strong>
                {data?.status}
              </p>
              <p className="w-full whitespace-normal text-base mb-5">
                <strong className="block font-semibold">
                  Original Language
                </strong>
                {data?.original_language}
              </p>
              <p className="w-full whitespace-normal text-base mb-5">
                <strong className="block font-semibold">Budget</strong>
                {data?.budget > 0 ? formatterCurrency.format(data?.budget) : "-"}
              </p>
              <p className="w-full whitespace-normal text-base mb-5">
                <strong className="block font-semibold">Revenue</strong>
                {data?.revenue > 0
                  ? formatterCurrency.format(data?.revenue)
                  : "-"}
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailMovieTV;
