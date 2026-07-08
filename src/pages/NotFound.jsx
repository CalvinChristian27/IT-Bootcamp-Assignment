import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6">
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" className="text-[#003366]">
        <g fill="currentColor"><path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 6a2 2 0 0 0-2 2a1 1 0 1 1-2 0a4 4 0 1 1 5.31 3.78a.674.674 0 0 0-.273.169a.177.177 0 0 0-.037.054v.497a1 1 0 1 1-2 0V14c0-1.152.924-1.856 1.655-2.11A2.001 2.001 0 0 0 12 8zm1 6.007v-.004v.004zM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z"/></g>
      </svg>

      {/* 404 */}
      <p className="text-8xl sm:text-9xl font-extrabold text-[#003366] leading-none">
        404
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-gray-800">
        Page Not Found
      </h1>
      <p className="text-gray-600 mt-3 max-w-md">
        Sorry, the page you are looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#ffd700] text-black font-bold rounded-lg shadow-md hover:-translate-y-1 duration-300 hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3z"
            />
          </svg>
          Back to Home
        </Link>
        <Link
          to="/clubs"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white border border-[#003366] text-[#003366] font-bold rounded-lg hover:bg-[#003366] hover:text-white transition-colors duration-300"
        >
          Explore Clubs
        </Link>
      </div>
    </div>
  );
}