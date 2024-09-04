import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
export default async function FileReader({fileName}:{fileName:string}) {
  try {
    // Define the path to the Markdown file
    const filePath = path.join(process.cwd() + '/content', fileName);

    // Read the Markdown file
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Convert Markdown to HTML
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const processedContent = await remark().use(html).process(fileContents);
    const contentHtml = processedContent.toString();

    return (
      <div className="grid justify-center">
        <div
          className="prose markdown-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    );
  } catch (error) {
    console.error("File reading error:", error);
    return <>Error loading file:</>;
  }

  return <>Welcome to page</>;
}
