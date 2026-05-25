import { notFound } from "next/navigation";

import { colleges } from "@/data/colleges";


import {
  MapPin,
  Star,
  IndianRupee,
  BriefcaseBusiness,
} from "lucide-react";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const college = colleges.find(
    (item) => item.id === Number(id)
  );

  if (!college) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-white">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />

        <div className="relative mx-auto max-w-7xl px-4 py-16">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>

              <div className="mb-4 inline-flex items-center rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-800">
                Top Rated College
              </div>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                {college.name}
              </h1>

              <div className="mt-5 flex items-center gap-6 text-slate-600">

                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {college.location}
                </div>

                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  {college.rating}
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                Explore courses, placements,
                campus details and admission
                insights for {college.name}.
              </p>

            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={college.image}
                alt={college.name}
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto max-w-7xl px-4 py-12">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
              <IndianRupee className="h-6 w-6" />
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Annual Fees
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              ₹ {(college.fees / 100000).toFixed(1)}L
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Average Package
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {college.placements.averagePackage}
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
              <Star className="h-6 w-6" />
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Student Rating
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {college.rating}/5
            </h3>
          </div>

        </div>

        {/* Courses */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-3xl font-bold">
            Courses Offered
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {college.courses.map((course) => (
              <div
                key={course}
                className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-medium"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}