import { Link } from "react-router-dom";
import { club } from "../data/club";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between font-serif min-h-[75vh] mx-5 sm:mx-10 gap-10 py-12 lg:py-0">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Discover Your <br />
            Community
          </h1>
          <div className="max-w-xl leading-relaxed text-base sm:text-lg my-6 sm:my-8 text-gray-600 mx-auto lg:mx-0">
            Explore a variety of student clubs, discover exciting activities,
            and connect with fellow students who share your interests. Whether
            you are looking to develop new skills, build lasting friendships, or
            gain valuable experiences outside the classroom.
          </div>
          <Link
            to="/clubs"
            className="inline-flex justify-between items-center px-6 py-3 sm:px-7 sm:py-4 gap-3 bg-[#ffd700] text-black font-bold rounded-lg shadow-md hover:-translate-y-1 duration-300 hover:shadow-lg"
          >
            Explore Clubs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
              />
            </svg>
          </Link>
        </div>
        <img
          src="/src/assets/images/hero-section.webp"
          alt="Hero Section"
          className="w-full max-w-md lg:max-w-none lg:w-[50%] object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="bg-[#F5F5F5] min-h-auto px-5 py-10 sm:p-10 border-t border-gray-200 overflow-hidden">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-2xl sm:text-4xl font-bold mb-2">Explore Communities</p>
            <span className="text-sm sm:text-lg text-gray-600">
              Find where you belong based on your interests.
            </span>
          </div>
          <Link
            to="/clubs"
            className="flex items-center gap-2 text-sm sm:text-md font-bold text-[#003366] hover:text-[#ffd700] transition-colors duration-200 cursor-pointer w-fit"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
              />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="flex gap-4 sm:gap-5 mt-5 overflow-x-auto snap-x snap-mandatory pb-5 -mx-5 px-5 sm:mx-0 sm:px-0">
          {/* Esport */}
          <Link
            to={`/clubs/${club[2].id}`}
            className="group shrink-0 w-[80vw] max-w-sm sm:w-auto sm:min-w-lg bg-white rounded-lg shadow-lg relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 snap-start"
          >
            <img
              src="/src/assets/images/clubs-hero/esport-community.webp"
              alt="Esport Club"
              className="w-full h-56 sm:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-7">
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <p className="text-black font-bold text-xs sm:text-sm rounded-full bg-[#FFD700] px-3 py-1 w-fit">
                  Trending
                </p>
                <p className="text-white text-xl sm:text-3xl font-bold pt-2">
                  Esport Community
                </p>
              </div>
              <p className="text-white text-sm sm:text-lg pt-1 max-h-0 overflow-hidden opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-1">
                Compete, collaborate, and grow your gaming skills with fellow
                students.
              </p>
            </div>
          </Link>
          {/* Photography */}
          <Link
            to={`/clubs/${club[0].id}`}
            className="group shrink-0 w-[80vw] max-w-sm sm:w-auto sm:min-w-lg bg-white rounded-lg shadow-lg relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 snap-start"
          >
            <img
              src="/src/assets/images/clubs-hero/photography-society.webp"
              alt="Photography Club"
              className="w-full h-56 sm:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-7">
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <p className="text-white text-xl sm:text-3xl font-bold pt-2">
                  Photography Society
                </p>
              </div>
              <p className="text-white text-sm sm:text-lg pt-1 max-h-0 overflow-hidden opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-1">
                Explore photography and capture memorable moments through
                creative projects.
              </p>
            </div>
          </Link>
          {/* Entrepreneurship */}
          <Link
            to={`/clubs/${club[4].id}`}
            className="group shrink-0 w-[80vw] max-w-sm sm:w-auto sm:min-w-lg bg-white rounded-lg shadow-lg relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 snap-start"
          >
            <img
              src="/src/assets/images/clubs-hero/entrepreneurship-hub.webp"
              alt="Entrepreneurship Club"
              className="w-full h-56 sm:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-7">
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <p className="text-white text-xl sm:text-3xl font-bold pt-2">
                  Entrepreneurship Hub
                </p>
              </div>
              <p className="text-white text-sm sm:text-lg pt-1 max-h-0 overflow-hidden opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-1">
                Turn innovative ideas into business opportunities and real-world
                experience.
              </p>
            </div>
          </Link>
          {/* Music */}
          <Link
            to={`/clubs/${club[1].id}`}
            className="group shrink-0 w-[80vw] max-w-sm sm:w-auto sm:min-w-lg bg-white rounded-lg shadow-lg relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 snap-start"
          >
            <img
              src="/src/assets/images/clubs-hero/music-club.webp"
              alt="Music Club"
              className="w-full h-56 sm:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-7">
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <p className="text-white text-xl sm:text-3xl font-bold pt-2">Music Club</p>
              </div>
              <p className="text-white text-sm sm:text-lg pt-1 max-h-0 overflow-hidden opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-1">
                Create, perform, and share music with a community of passionate
                musicians.
              </p>
            </div>
          </Link>
          {/* Art */}
          <Link
            to={`/clubs/${club[3].id}`}
            className="group shrink-0 w-[80vw] max-w-sm sm:w-auto sm:min-w-lg bg-white rounded-lg shadow-lg relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 snap-start"
          >
            <img
              src="/src/assets/images/clubs-hero/art-club.webp"
              alt="Art Club"
              className="w-full h-56 sm:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-7">
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <p className="text-white text-xl sm:text-3xl font-bold pt-2">Art Club</p>
              </div>
              <p className="text-white text-sm sm:text-lg pt-1 max-h-0 overflow-hidden opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-1">
                Develop artistic skills and express creativity through various
                forms of visual art.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}