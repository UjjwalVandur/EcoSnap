export default function Home() {
  return (
    <>
      <div className="hero min-h-[85vh] bg-base-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <span><img  src="/ecosnap.gif" ></img></span>
            <h1 className="text-7xl font-bold text-emerald-400">EcoSnap</h1>
            <p className=" py-6 text-lg">
              Your one-stop solution for waste management. Join us in making the
              world a cleaner place.
            </p>
            <div className="flex gap-4">
              <span><img className="absolute z-0 bottom-12 " src="/grass.gif" ></img></span>
              <span><img className="absolute z-0 bottom-12 " src="/grass.gif" ></img></span>
            </div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
