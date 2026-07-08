export function ViewToggle({ viewMode, setViewMode }) {
  const isGrid = viewMode === "grid";

  return (
    <div className="relative inline-flex rounded-md border border-gray-300 bg-gray-200 p-1">
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-white shadow-sm transition-transform duration-300 ease-out ${
          isGrid ? "translate-x-0" : "translate-x-full"
        }`}
      />

      <button
        type="button"
        onClick={() => setViewMode("grid")}
        className={`relative z-10 rounded-md p-2 transition-colors duration-300 ${
          isGrid ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 11V3h8v8zm0 10v-8h8v8zm10-10V3h8v8zm0 10v-8h8v8z"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setViewMode("list")}
        className={`relative z-10 rounded-md p-2 transition-colors duration-300 ${
          !isGrid ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h2v2H6zm2 4H6v2h2zm-2 4h2v2H6zm12-8h-8v2h8zm-8 8h8v2h-8zm8-4h-8v2h8z"
          />
        </svg>
      </button>
    </div>
  );
}
