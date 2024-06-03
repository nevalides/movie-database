import { useCallback, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailMovieTV from "./DetailMovieTV";
import DetailPeople from "./DetailPeople";

const Detail = () => {
  const { mediaType, id } = useParams();
  const additionalResponse =
    mediaType === "person" ? "combined_credits" : "credits,reviews";
  const { data, error, status, fetchData } = useFetch(
    `/${mediaType}/${id}?append_to_response=${additionalResponse}`,
    {},
    useCallback(
      (data) => ({
        data: data,
      }),
      []
    )
  );

  useEffect(() => {
    fetchData();
  }, [mediaType, id]);

  console.log(data);

  // if (status === "resolved" && data.backdrop_path) {
  //   backdropPath = `${BASE_IMG_URL}${data.backdrop_path}`;
  // } else {
  //   backdropPath = errorBackdrop;
  // }

  if (status === "resolved" && mediaType !== "person") {
    return <DetailMovieTV data={data} />;
  } else if (status === "resolved" && mediaType === "person") {
    return <DetailPeople data={data} />;
  }
};

export default Detail;
