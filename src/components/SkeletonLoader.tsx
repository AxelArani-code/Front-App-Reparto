
export default function SkeletonLoader() {
  return (
    <div className="font-sans animate-pulse">

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:max-w-xl w-full">
            <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto md:mx-0" />
            <div className="h-6 bg-gray-300 rounded mt-4 w-1/2 mx-auto md:mx-0" />
            <div className="h-4 bg-gray-300 rounded mt-6 w-full" />
            <div className="h-4 bg-gray-300 rounded mt-2 w-5/6" />
            <div className="mt-6 w-full max-w-md">
              <div className="h-12 bg-gray-300 rounded w-full" />
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:ml-12">
            <div className="bg-gray-300 w-64 md:w-96 lg:w-[250px] xl:w-[400px] h-[300px] rounded-xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-black z-0 rounded-b-[40px]" />
        <div className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
          <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white text-black rounded-[28px] p-6 shadow-xl flex flex-col items-center">
                <div className="h-48 w-40 bg-gray-300 rounded mb-6" />
                <div className="h-6 w-2/3 bg-gray-300 rounded" />
                <div className="h-4 w-4/5 bg-gray-300 rounded mt-4" />
                <div className="h-4 w-3/4 bg-gray-300 rounded mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-32">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <div className="h-6 bg-gray-300 rounded w-32" />
            <div className="h-4 bg-gray-300 rounded mt-2 w-24" />
          </div>
          <div className="mt-6 md:mt-0 grid grid-cols-2 gap-6">
            <div>
              <div className="h-4 bg-gray-300 rounded w-20" />
              <div className="mt-2 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-24" />
                <div className="h-4 bg-gray-300 rounded w-28" />
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
