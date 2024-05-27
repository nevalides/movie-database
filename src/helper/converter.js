import TurndownService from "turndown";

export function turndownMarkup(htmlString) {
  const turndownService = new TurndownService();
  // turndownService.keep("br");

  return turndownService.turndown(htmlString);
}

export const dateFormatter = (date) => {
  const dateObj = new Date(date);
  const day =
    dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const month =
    dateObj.getMonth() < 10 ? `0${dateObj.getMonth()}` : dateObj.getMonth();
  return `${day}/${month}/${dateObj.getFullYear()}`;
};

// export function convertMarkupToMarkdown(htmlString) {
//   const markdownLines = [];

//   // Convert common HTML elements to Markdown equivalents
//   // const replacements = {
//   //   "<b>": "**", // Bold
//   //   "</b>": "**",
//   //   "<i>": "_", // Italic
//   //   "</i>": "_",
//   //   "<u>": "", // Underline (not directly supported in Markdown)
//   //   "</u>": "",
//   //   "<h1>": "# ", // Heading 1
//   //   "</h1>": "\n",
//   //   "<h2>": "## ", // Heading 2
//   //   "</h2>": "\n",
//   //   "<h3>": "### ", // Heading 3
//   //   "</h3>": "\n",
//   //   "<br>": "\n", // Line break
//   //   '<a href="(.*?)">(.*?)</a>': "[\\2](\\1)", // Links
//   // };

//   // Split the HTML string into separate tags
//   const htmlElements = htmlString.split(" ");
//   // const htmlElements = htmlString.split(/<\/?[^>]+(>|$)/g);

//   // console.log(htmlElements);

//   // Loop through elements and convert them to Markdown
//   for (let element of htmlElements) {
//     // Check if it's a text node
//     // if (element.startsWith("<a")) {

//     // }
//     // if (!element.startsWith("<")) {
//     //   markdownLines.push(element);
//     //   continue;
//     // }

//     // Apply replacements based on opening or closing tags
//     // let stringExample = 'makan'
//     const breakLineReplacement = element.replace("\r\n", "<br>");
//     markdownLines.push(breakLineReplacement);
//   }

//   // console.log(markdownLines);

//   // Return the joined markdown lines
//   return markdownLines.join(" ");
// }
