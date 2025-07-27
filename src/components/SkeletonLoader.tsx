

import Lottie from "lottie-react";
import animationData from "../animation/loading.json"; // Ruta del JSON
export default function SkeletonLoader() {
  return (
    <div className="font-sans animate-pulse">

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-32 mt-40">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="mt-10 md:mt-0 md:ml-12 ">
            <div className="bg-gray-300 w-34 md:w-36 lg:w-[50px] xl:w-[50px] h-[100px] rounded-xl" >
                <Lottie className="w-34 md:w-36 lg:w-[50px] xl:w-[50px] h-[100px]" animationData={animationData} loop={true} />
            </div>
            
          </div>
        </div>
      </section>


    </div>
  )
}
