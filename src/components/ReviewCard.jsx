import Markdown from "react-markdown";
import { dateFormatter, turndownMarkup } from "../helper/converter";

const ReviewCard = ({ style, data }) => {
  const breakLineReplace = data.content.replaceAll("\r\n", "&nbsp<br>");
  const turdownReplace = turndownMarkup(breakLineReplace);
  const escapedMarkdownReplace = turdownReplace.replace(/\\/g, "");

  return (
    <div className={`w-full${style}`}>
      <h3 className="text-lg font-bold">{data.author}</h3>
      <p className="text-darker-grey text-sm pb-3">
        Written on {dateFormatter(data.created_at)}
      </p>
      <Markdown>{escapedMarkdownReplace}</Markdown>
    </div>
  );
};

export default ReviewCard;
