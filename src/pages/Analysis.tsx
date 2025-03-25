

export default function Analysis() {
  return (
<div>
      <div className="flex overflow-hidden bg-white pt-16">
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main>
            <div className="pt-6 px-4">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <Card title="$45,385" subtitle="Sales this week" percentage="12.5%" positive={true} />
              </div>
              <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Card title="2,340" subtitle="New products this week" percentage="14.6%" positive={true} />
                <Card title="5,355" subtitle="Visitors this week" percentage="32.9%" positive={true} />
                <Card title="385" subtitle="User signups this week" percentage="-2.7%" positive={false} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title ="$45,385", subtitle="Sales this week", percentage="12.5%", positive=false}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{title}</span>
          <h3 className="text-base font-normal text-gray-500">{subtitle}</h3>
        </div>
        <div className={`ml-5 w-0 flex items-center justify-end flex-1 text-base font-bold ${positive ? "text-green-500" : "text-red-500"}`}>
          {percentage}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d={positive ? "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" : "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"}
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
