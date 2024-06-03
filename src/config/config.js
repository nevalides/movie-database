const BASE_URL = "https://api.themoviedb.org/3";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "87c8bdeb579314ea4a3348a75d2fe40c";
const ACC_LANG = "en-US";
const APP_NAME = "Movie DB";

const MENU = {
  movie: [
    { name: "Popular", path: "popular" },
    { name: "Now Playing", path: "now_playing" },
    { name: "Upcoming", path: "upcoming" },
    { name: "Top Rated", path: "top_rated" },
  ],
  tv: [
    { name: "Airing Today", path: "airing_today" },
    { name: "On The Air", path: "on_the_air" },
    { name: "Popular", path: "popular" },
    { name: "Top Rated", path: "top_rated" },
  ],
  person: [{ name: "Popular", path: "popular" }],
};

export { BASE_URL, BASE_IMG_URL, API_KEY, ACC_LANG, MENU, APP_NAME };
