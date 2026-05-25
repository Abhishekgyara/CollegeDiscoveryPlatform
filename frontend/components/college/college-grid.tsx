"use client";

import { useMemo, useState } from "react";

import { colleges } from "@/data/colleges";

import CollegeCard from "./college-card";
import SearchBar from "../filters/search-bar";
import FilterBar from "../filters/filter-bar";

export default function CollegeGrid() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedRating, setSelectedRating] =
    useState(0);

  const [selectedFee, setSelectedFee] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("default");

  const filteredColleges = useMemo(() => {
    let filtered = [...colleges];

    // SEARCH
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((college) => {
        const value =
          searchTerm.toLowerCase();

        return (
          college.name
            .toLowerCase()
            .includes(value) ||

          college.location
            .toLowerCase()
            .includes(value) ||

          college.courses.some((course) =>
            course
              .toLowerCase()
              .includes(value)
          )
        );
      });
    }

    // RATING
    filtered = filtered.filter(
      (college) =>
        college.rating >= selectedRating
    );

    // FEES
    if (selectedFee === "low") {
      filtered = filtered.filter(
        (college) => college.fees < 200000
      );
    }

    if (selectedFee === "mid") {
      filtered = filtered.filter(
        (college) =>
          college.fees >= 200000 &&
          college.fees <= 300000
      );
    }

    if (selectedFee === "high") {
      filtered = filtered.filter(
        (college) => college.fees > 300000
      );
    }

    // SORT
    if (sortBy === "rating") {
      filtered.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "feesLow") {
      filtered.sort(
        (a, b) => a.fees - b.fees
      );
    }

    if (sortBy === "feesHigh") {
      filtered.sort(
        (a, b) => b.fees - a.fees
      );
    }

    return filtered;
  }, [
    searchTerm,
    selectedRating,
    selectedFee,
    sortBy,
  ]);

  return (
    <section className="mt-10">

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="text-sm text-slate-500">
          {filteredColleges.length} colleges found
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedFee={selectedFee}
        setSelectedFee={setSelectedFee}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredColleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredColleges.length === 0 && (
        <div className="mt-20 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">

          <h3 className="text-2xl font-bold">
            No colleges found
          </h3>

          <p className="mt-3 text-slate-500">
            Try changing your filters.
          </p>
        </div>
      )}
    </section>
  );
}