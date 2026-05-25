"use client";

import Link from "next/link";
import { Trash2, MapPin, Star } from "lucide-react";

import { useSaved } from "@/context/saved-context";

export default function SavedPage() {
  const { savedItems, removeFromSaved } =
    useSaved();

  return (
    <main className="min-h-screen bg-slate-50">
      
      <section className="mx-auto max-w-7xl px-4 py-14">
        
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Saved Colleges
          </h1>

          <p className="mt-3 text-slate-600">
            Your bookmarked colleges for later review.
          </p>
        </div>

        {/* Empty State */}
        {savedItems.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">
            
            <h2 className="text-3xl font-bold">
              No saved colleges yet
            </h2>

            <p className="mt-3 text-slate-500">
              Save colleges to view them here.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Colleges
            </Link>
          </div>
        )}

        {/* Saved Grid */}
        {savedItems.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {savedItems.map((college) => (
              <div
                key={college.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                
                {/* Image */}
                <div className="relative h-52">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {college.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  
                  <h2 className="text-xl font-bold text-slate-900">
                    {college.name}
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4" />
                    {college.location}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    
                    <div>
                      <p className="text-xs text-slate-500">
                        Annual Fees
                      </p>

                      <p className="font-semibold">
                        ₹{" "}
                        {(college.fees / 100000).toFixed(
                          1
                        )}
                        L
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        removeFromSaved(college.id)
                      }
                      className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>

                  <Link
                    href={`/college/${college.id}`}
                    className="mt-6 block rounded-2xl bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}