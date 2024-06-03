import { BASE_IMG_URL } from "../config/config";
import tempPic from "../assets/image_error_poster.png";
import { Link } from "react-router-dom";

const PeopleCastCard = ({ data }) => {
  const mediaType = 'person'

  return (
    <Link to={`/${mediaType}/${data.id}`}
      className="min-w-[150px] h-full shadow rounded-lg hover:cursor-pointer"
    >
      <div>
        <img
          className="h-[calc(150px*1.5)] min-h-[calc(150px*1.5)] w-full aspect-[2/3] rounded-t-lg"
          src={
            data.profile_path ? `${BASE_IMG_URL}${data.profile_path}` : tempPic
          }
          alt=""
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold">{data.name}</h2>
        <p>{data.character}</p>
      </div>
    </Link>
  );
};

export default PeopleCastCard;
