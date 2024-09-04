import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

async function ReadDirectory() {
    const directoryPath = path.join(process.cwd(), 'content');
    const filenames = fs.readdirSync(directoryPath);
    const markdownFiles = filenames.filter((file) => file.endsWith('.md'));

    // Convert markdown files to HTML
    const files = await Promise.all(
        markdownFiles?.map(async (file) => {
            const filePath = path.join(directoryPath, file);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const processedContent = await remark()
                .use(html)
                .process(fileContents);

            return {
                filename: file,
                content: processedContent.toString(),
            };
        })
    )
    return  files

}

export default ReadDirectory
