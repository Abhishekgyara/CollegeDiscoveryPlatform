"use client";

type FilterBarProps = {
  selectedRating: number;
  setSelectedRating: (value: number) => void;

  selectedFee: string;
  setSelectedFee: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;
};

export default function FilterBar({
  selectedRating,
  setSelectedRating,
  selectedFee,
  setSelectedFee,
  sortBy,
  setSortBy,
}: FilterBarProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      
      {/* Rating */}
      <select
        value={selectedRating}
        onChange={(e) =>
          setSelectedRating(Number(e.target.value))
        }
        className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none"
      >
        <option value={0}>All Ratings</option>
        <option value={4}>4+ Rating</option>
        <option value={4.5}>4.5+ Rating</option>
      </select>

      {/* Fees */}
      <select
        value={selectedFee}
        onChange={(e) =>
          setSelectedFee(e.target.value)
        }
        className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none"
      >
        <option value="all">All Fees</option>
        <option value="low">Below 2L</option>
        <option value="mid">2L - 3L</option>
        <option value="high">Above 3L</option>
      </select>

      {/* Sorting */}
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none"
      >
        <option value="default">Sort By</option>
        <option value="rating">
          Highest Rating
        </option>
        <option value="feesLow">
          Lowest Fees
        </option>
        <option value="feesHigh">
          Highest Fees
        </option>
      </select>
    </div>
  );
}