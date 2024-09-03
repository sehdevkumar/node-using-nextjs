import FileReader from "./FileReader";

// src/components/Terminal.tsx
export default function Terminal() {
  return (
    <div className="mx-auto w-full h-full overflow-hidden rounded-lg bg-gray-900 p-4 font-mono text-white shadow-lg">
      {/* Top bar with colored circles */}
      <div className="mb-2 flex items-center">
        <div className="flex space-x-2">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="rounded-lg h-[calc(100%-20px)]  p-4 overflow-auto grid">
          <FileReader/>
      </div>
    </div>
  );
}
