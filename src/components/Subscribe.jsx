const Subscribe = () => {
    return (
      <div className="my-5">
        <div className="max-w-screen-xl mx-auto py-5">
          <div className="flex justify-center">
            <div className="w-1/2 text-center">
              <h2 className="uppercase text-cDark font-semibold py-3">
                Subscribe
              </h2>
              <h1 className="font-bold text-2xl capitalize">
                Subscribe to get the latest <br /> news about us
              </h1>
              <p className="text-xs text-slate-600 font-semibold">
                Please drop your email below to get daily update about what we do
              </p>
              <div className="flex justify-center mt-5 ">
                <div className="border my-3 flex justify-between rounded-xl  p-1 border-black w-3/4">
                  <input
                    className="w-full outline-0"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <button className="bg-cOrange text-white p-2 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Subscribe;
  