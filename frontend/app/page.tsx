import CollegeGrid from "@/components/college/college-grid";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-white">
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full bg-slate-200 px-4 py-1 text-sm font-medium text-slate-700">
              Find Your Dream College
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
              Discover Top Colleges Across India
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Compare colleges based on fees,
              placements, ratings and courses —
              all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* College Listings */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Top Colleges
            </h2>

            <p className="mt-2 text-slate-500">
              Explore curated colleges with
              detailed insights.
            </p>
          </div>
        </div>

        <CollegeGrid />
      </section>
    </main>
  );
}