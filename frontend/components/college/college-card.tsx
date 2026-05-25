"use client";
import { MapPin, Star, IndianRupee } from "lucide-react";
import { College } from "@/types/college";
import Link from "next/link";
import { useCompare } from "@/context/compare-context";
import { useSaved } from "@/context/saved-context";

type CollegeCardProps = {
  college: College;
};



export default function CollegeCard({
  college,
}: CollegeCardProps) {
    const {
  addToCompare,
  compareItems,
} = useCompare();
const isAddedToCompare =
  compareItems.some(
    (item) => item.id === college.id
  );

  const {
  addToSaved,
  savedItems,
} = useSaved();

const isSaved =
  savedItems.some(
    (item) => item.id === college.id
  );


  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {college.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-2 text-xl font-bold text-slate-900">
          {college.name}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          {college.location}
        </div>

        {/* Fees + Placement */}
        <div className="mt-5 grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-slate-100 p-3">
            <p className="text-xs text-slate-500">
              Annual Fees
            </p>

            <div className="mt-1 flex items-center font-semibold text-slate-900">
              <IndianRupee className="mr-1 h-4 w-4" />
              {(college.fees / 100000).toFixed(1)}L
            </div>
          </div>

          <div className="rounded-xl bg-slate-100 p-3">
            <p className="text-xs text-slate-500">
              Avg Package
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {college.placements.averagePackage}
            </p>
          </div>
        </div>

        {/* Courses */}
        <div className="mt-5 flex flex-wrap gap-2">
          {college.courses.map((course) => (
            <span
              key={course}
              className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {course}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Link
            href={`/college/${college.id}`}
            className="flex-1 rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
          >
            View Details
          </Link>

         <button
  onClick={() =>
    addToCompare(college)
  }
  disabled={isAddedToCompare}
  className={`rounded-xl px-4 py-3 text-sm font-medium transition
  ${
    isAddedToCompare
      ? "cursor-not-allowed border border-green-200 bg-green-100 text-green-700"
      : "border border-slate-300 hover:bg-slate-100"
  }`}
>
  {isAddedToCompare
    ? "Added"
    : "Compare"}
</button>

<button
  onClick={() =>
    addToSaved(college)
  }
  disabled={isSaved}
  className={`rounded-xl px-4 py-3 text-sm font-medium transition
  ${
    isSaved
      ? "cursor-not-allowed bg-pink-100 text-pink-700"
      : "border border-slate-300 hover:bg-slate-100"
  }`}
>
  {isSaved ? "Saved" : "Save"}
</button>
        </div>
      </div>
    </div>
  );
}