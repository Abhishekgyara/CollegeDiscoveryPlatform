"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      
      <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        placeholder="Search colleges, locations or courses..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-sm shadow-sm outline-none transition focus:border-black focus:ring-4 focus:ring-slate-200"
      />
    </div>
  );
}