export function LoadingSection() {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto">
        <div className="animate-pulse space-y-8">
          {/* Header skeleton */}
          <div className="flex flex-col items-center space-y-4">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 max-w-md"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-2/3 max-w-sm"></div>
          </div>
          
          {/* Content skeleton */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
