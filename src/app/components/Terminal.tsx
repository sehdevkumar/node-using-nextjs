/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReadDirectory from "~/lib/ReadDirectory";
import FileReader from "./FileReader";

// src/components/Terminal.tsx
export default async function Terminal() {
   
  const files = await ReadDirectory()


     



  return (
    <div className="mx-auto h-full w-full overflow-hidden rounded-lg bg-gray-900 p-4 font-mono text-white shadow-lg">
      {/* Top bar with colored circles */}
      <div className="mb-2 flex items-center">
        <div className="flex space-x-2">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="grid h-[calc(100%-20px)] overflow-auto rounded-lg p-4">
         {
          files.map((f,i)=> {
             return <FileReader key={i} fileName={f.filename}/>;
          })
         }
      </div>
    </div>
  );
}
