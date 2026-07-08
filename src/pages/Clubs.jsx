import { club } from "../data/club";
import { ClubCard } from "../components/ClubCard";
import { ViewToggle } from "../components/ViewToggle";
import { SortDropdown } from "../components/sortDropdown";
import { useMemo, useState } from "react";

export default function Clubs() {
  const [sortOrder, setSortOrder] = useState("az");
  const [viewMode, setViewMode] = useState("grid");

  const sortedClubs = useMemo(() => {
    return [...club].sort((a, b) =>
      sortOrder === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }, [sortOrder]);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Explore Clubs</h1>
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-lg text-gray-600">
          Find your community. Browse all active student organizations below.
        </h2>
        <div className="flex items-center gap-3">
          {/* Sort Button */}
          <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />

          {/* View Toggle */}
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </div>

      {/* Club Cards */}
      <div
        className={
          viewMode === "grid"
            ? "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "mt-10 flex flex-col gap-6"
        }
      >
        {sortedClubs.map((c) => (
          <ClubCard key={c.id} club={c} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}