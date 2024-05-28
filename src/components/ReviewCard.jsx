import React from "react";
import Markdown from "react-markdown";
import { dateFormatter, turndownMarkup } from "../helper/converter";

const ReviewCard = ({ style, data }) => {
  const breakLineReplace = data.content.replaceAll("\r\n", "&nbsp<br>");
  // console.log(breakLineReplace);
  const turdownReplace = turndownMarkup(breakLineReplace);
  // console.log(turdownReplace);
  const escapedMarkdownReplace = turdownReplace.replace(/\\/g, "");
  // console.log(escapedMarkdownReplace);

  return (
    <div className={`w-full${style}`}>
      <h3>{data.author}</h3>
      <p className="text-darker-grey">
        Written on {dateFormatter(data.created_at)}
      </p>
      <Markdown>{escapedMarkdownReplace}</Markdown>
    </div>
  );
};

export default ReviewCard;
