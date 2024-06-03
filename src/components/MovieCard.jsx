import tempPic from "../assets/image_error_poster.png";
import { BASE_IMG_URL } from "../config/config";
import { Link } from "react-router-dom";

const MovieCard = ({ data, noDate, center }) => {
  let mediaType;

  if (data.title) {
    mediaType = "movie";
  } else if (data.name) {
    mediaType = "tv";
  }

  return (
    <Link to={`/${mediaType}/${data.id}`}
      className="w-[150px] min-w-[150px] hover:cursor-pointer"
    >
      <div>
        <img
          className="h-[calc(150px*1.5)] min-h-[calc(150px*1.5)] aspect-[2/3] rounded-lg shadow"
          src={
            data.poster_path ? `${BASE_IMG_URL}${data.poster_path}` : tempPic
          }
          alt=""
        />
      </div>
      <div className={`p-2 ${center ? 'text-center' : ''}`}>
        <h2 className="font-bold">{data.title ?? data.name}</h2>
        {!noDate && <p>
          {data.release_date ?? data.first_air_date}
        </p>}
      </div>
    </Link>
  );
};

export default MovieCard;
