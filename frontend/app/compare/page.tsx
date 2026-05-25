"use client";

import { useCompare } from "@/context/compare-context";

import {
  IndianRupee,
  MapPin,
  Star,
  Trash2,
  Trophy,
} from "lucide-react";

export default function ComparePage() {
  const {
    compareItems,
    removeFromCompare,
  } = useCompare();

  // Smart Recommendation Logic
  const bestPlacementCollege =
    compareItems.reduce(
      (best, current) => {
        const bestValue = parseInt(
          best?.placements.averagePackage || "0"
        );

        const currentValue = parseInt(
          current.placements.averagePackage
        );

        return currentValue > bestValue
          ? current
          : best;
      },
      compareItems[0]
    );

  const bestAffordableCollege =
    compareItems.reduce(
      (best, current) =>
        current.fees < best.fees
          ? current
          : best,
      compareItems[0]
    );

  const topRatedCollege =
    compareItems.reduce(
      (best, current) =>
        current.rating > best.rating
          ? current
          : best,
      compareItems[0]
    );

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">

          <h1 className="text-5xl font-extrabold tracking-tight">
            Compare Colleges
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            Compare colleges side-by-side
            and discover the best fit for you.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-14">

        {compareItems.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-20 text-center">

            <h2 className="text-3xl font-bold">
              No Colleges Added
            </h2>

            <p className="mt-4 text-slate-500">
              Add colleges using compare button.
            </p>

          </div>

        ) : (

          <>
            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm">

              <table className="w-full min-w-[900px] border-collapse">

                <thead className="bg-slate-100">

                  <tr>

                    <th className="p-5 text-left text-lg font-bold">
                      Features
                    </th>

                    {compareItems.map((college) => (
                      <th
                        key={college.id}
                        className="p-5 text-left"
                      >

                        <div className="flex items-start justify-between gap-4">

                          <div>
                            <h2 className="text-xl font-bold">
                              {college.name}
                            </h2>

                            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                              <MapPin className="h-4 w-4" />
                              {college.location}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCompare(
                                college.id
                              )
                            }
                            className="rounded-xl border border-slate-200 p-2 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </button>

                        </div>

                      </th>
                    ))}

                  </tr>

                </thead>

                <tbody>

                  {/* Fees */}
                  <tr className="border-t">

                    <td className="p-5 font-semibold">
                      Annual Fees
                    </td>

                    {compareItems.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >

                        <div className="flex items-center text-lg font-bold">

                          <IndianRupee className="mr-1 h-5 w-5" />

                          {(college.fees / 100000).toFixed(1)}L

                        </div>

                      </td>
                    ))}

                  </tr>

                  {/* Rating */}
                  <tr className="border-t bg-slate-50">

                    <td className="p-5 font-semibold">
                      Rating
                    </td>

                    {compareItems.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >

                        <div className="flex items-center gap-2 font-semibold">

                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                          {college.rating}/5

                        </div>

                      </td>
                    ))}

                  </tr>

                  {/* Placements */}
                  <tr className="border-t">

                    <td className="p-5 font-semibold">
                      Avg Package
                    </td>

                    {compareItems.map((college) => (
                      <td
                        key={college.id}
                        className="p-5 text-lg font-bold"
                      >
                        {
                          college.placements
                            .averagePackage
                        }
                      </td>
                    ))}

                  </tr>

                  {/* Courses */}
                  <tr className="border-t bg-slate-50">

                    <td className="p-5 font-semibold">
                      Courses
                    </td>

                    {compareItems.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >

                        <div className="flex flex-wrap gap-2">

                          {college.courses.map(
                            (course) => (
                              <span
                                key={course}
                                className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium"
                              >
                                {course}
                              </span>
                            )
                          )}

                        </div>

                      </td>
                    ))}

                  </tr>

                </tbody>

              </table>

            </div>

            {/* Suggestions */}
            <div className="mt-12 grid gap-6 lg:grid-cols-3">

              {/* Placements */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-yellow-100 p-3">
                    <Trophy className="h-6 w-6 text-yellow-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Best Placements
                    </p>

                    <h3 className="text-xl font-bold">
                      {bestPlacementCollege?.name}
                    </h3>
                  </div>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Best suited for students
                  targeting strong placement
                  opportunities and higher
                  salary packages.
                </p>

              </div>

              {/* Affordable */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-green-100 p-3">
                    <IndianRupee className="h-6 w-6 text-green-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Most Affordable
                    </p>

                    <h3 className="text-xl font-bold">
                      {bestAffordableCollege?.name}
                    </h3>
                  </div>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Ideal for students seeking
                  strong academics with lower
                  tuition costs and better ROI.
                </p>

              </div>

              {/* Top Rated */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="rounded-2xl bg-blue-100 p-3">
                    <Star className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Highest Rated
                    </p>

                    <h3 className="text-xl font-bold">
                      {topRatedCollege?.name}
                    </h3>
                  </div>

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Recommended for overall
                  campus experience, academics
                  and student satisfaction.
                </p>

              </div>

            </div>
          </>
        )}

      </section>
    </main>
  );
}