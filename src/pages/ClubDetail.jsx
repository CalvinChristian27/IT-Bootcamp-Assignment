import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { club } from "../data/club";

export default function ClubDetail() {
  const { id } = useParams();
  const currentClub = club.find((c) => c.id === id);

  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (!currentClub) return;
    const joinedClubs = JSON.parse(localStorage.getItem("joinedClubs")) || [];
    setJoined(joinedClubs.includes(currentClub.id));
  }, [currentClub]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem("joinedClubs")) || [];
    if (!joinedClubs.includes(currentClub.id)) {
      const updated = [...joinedClubs, currentClub.id];
      localStorage.setItem("joinedClubs", JSON.stringify(updated));
      setJoined(true);
    }
  };

  if (!currentClub) {
    return (
      <div className="p-10 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[#003366]">Club Not Found</h1>
        <p className="text-gray-600 mt-2">
          The club you are looking for does not exist.
        </p>
        <Link
          to="/clubs"
          className="mt-6 inline-block px-6 py-3 bg-[#003366] text-white rounded-md font-semibold hover:bg-[#002347] transition-colors duration-200"
        >
          Back to Clubs
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header Image */}
      <div className="relative h-72 sm:h-96 w-full">
        <img src={currentClub.imgHeader} alt={currentClub.name} className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:py-10 sm:px-15 sm:flex items-center justify-between">
          <h1 className="text-white text-3xl sm:text-5xl font-bold">
            {currentClub.name}
          </h1>
          {/* Join Button */}
          <div className="mt-5">
            {joined ? (
              <button
                disabled
                className="px-6 py-3 bg-gray-200 text-gray-500 rounded-md font-bold cursor-not-allowed"
              >
                You have joined this club!
              </button>
            ) : (
              <button
                onClick={handleJoin}
                className="flex justify-between items-center gap-3 px-7 py-3 bg-[#ffd700] text-black font-bold rounded-lg shadow-md hover:-translate-y-1 duration-300 hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                  <g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8"/><path d="M38 13v12zm-6 6h12z" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 13v12m-6-6h12"/></g>
                </svg>
                Join Club
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="sm:flex justify-between max-w-full mx-auto p-6 sm:p-15 gap-7">
        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed border border-gray-300 shadow-sm bg-white p-4 rounded-lg sm:w-3/4">
          <h2 className="text-[#003366] font-bold text-2xl mb-4">About Us</h2>
          {currentClub.description}
        </p>

        {/* Events */}
        <div className="mt-5 sm:mt-0 border border-gray-300 shadow-sm bg-white rounded-lg p-4">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">
            Upcoming Events
          </h2>
          <div className="flex flex-col">
            {currentClub.events.map((event, idx) => (
              <div key={idx} className="flex items-center p-4 border-b">
                <p className="flex flex-col items-center bg-[#003366] text-white py-2 px-5 mr-5 rounded-md">
                  {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  <span className="text-xl font-bold">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                    })}
                  </span>
                </p>
                <div className="flex flex-col">
                  <span className="font-medium mb-2">{event.name}</span>
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></g>
                    </svg>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
