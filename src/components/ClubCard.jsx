import { Link } from "react-router-dom";

export function ClubCard({ club, viewMode }) {
  // List View
  if (viewMode == "list") {
    return (
      <div className="flex flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={club.image}
          alt={club.name}
          className="w-24 h-32 sm:w-sm sm:h-56 object-cover shrink-0"
        />
        <div className="flex flex-col justify-between p-3 sm:p-6 flex-1 min-w-0">
          <div>
            <h3 className="text-sm sm:text-xl font-bold text-[#003366] truncate">
              {club.name}
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base line-clamp-2 sm:line-clamp-none">
              {club.shortDescription}
            </p>
          </div>
          <Link
            to={`/clubs/${club.id}`}
            className="mt-2 sm:mt-4 inline-flex w-fit items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#003366] text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-[#002347] transition-colors duration-200"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-bold text-[#003366]">{club.name}</h3>
        <p className="text-gray-600 mt-2 flex-1">{club.shortDescription}</p>
        <Link
          to={`/clubs/${club.id}`}
          className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#003366] text-white text-sm font-semibold rounded-md hover:bg-[#001B3C] transition-colors duration-200"
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
