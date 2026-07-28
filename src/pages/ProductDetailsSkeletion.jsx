const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 animate-pulse">
      <div className="max-w-7xl mx-auto">

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Image */}
          <div className="bg-zinc-900 rounded-xl p-6 flex justify-center items-center">
            <div className="w-full h-112.5 bg-zinc-800 rounded-lg"></div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">

            <div className="h-6 w-24 bg-zinc-800 rounded-full"></div>

            <div className="h-10 w-4/5 bg-zinc-800 rounded"></div>

            <div className="h-5 w-40 bg-zinc-800 rounded"></div>

            <div className="flex gap-2">
              <div className="h-5 w-20 bg-zinc-800 rounded"></div>
              <div className="h-5 w-28 bg-zinc-800 rounded"></div>
            </div>

            <div className="flex gap-3">
              <div className="h-10 w-28 bg-zinc-800 rounded"></div>
              <div className="h-10 w-20 bg-zinc-800 rounded"></div>
              <div className="h-10 w-24 bg-zinc-800 rounded"></div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-5 w-32 bg-zinc-800 rounded"></div>

              <div className="h-4 w-full bg-zinc-800 rounded"></div>
              <div className="h-4 w-full bg-zinc-800 rounded"></div>
              <div className="h-4 w-3/4 bg-zinc-800 rounded"></div>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-zinc-800 rounded-full"></div>
              <div className="h-8 w-24 bg-zinc-800 rounded-full"></div>
            </div>

            {/* Specifications */}
            <div className="bg-zinc-900 rounded-xl p-5 space-y-4">

              <div className="h-6 w-40 bg-zinc-800 rounded"></div>

              {[1,2,3,4,5,6].map((item)=>(
                <div
                  key={item}
                  className="flex justify-between"
                >
                  <div className="h-4 w-24 bg-zinc-800 rounded"></div>
                  <div className="h-4 w-36 bg-zinc-800 rounded"></div>
                </div>
              ))}

            </div>

          </div>

          {/* Purchase Card */}
          <div className="bg-zinc-900 rounded-xl p-6 h-fit space-y-5">

            <div className="h-10 w-32 bg-zinc-800 rounded"></div>

            <div className="h-5 w-40 bg-zinc-800 rounded"></div>

            <div className="space-y-4">

              <div className="h-5 w-full bg-zinc-800 rounded"></div>

              <div className="h-5 w-full bg-zinc-800 rounded"></div>

              <div className="h-5 w-full bg-zinc-800 rounded"></div>

            </div>

            <div className="h-12 w-full bg-zinc-800 rounded-lg"></div>

            <div className="h-12 w-full bg-zinc-800 rounded-lg"></div>

            <div className="space-y-2">
              <div className="h-4 w-32 bg-zinc-800 rounded"></div>
              <div className="h-4 w-40 bg-zinc-800 rounded"></div>
            </div>

          </div>

        </div>

        {/* Reviews */}
        <div className="mt-14">

          <div className="h-8 w-56 bg-zinc-800 rounded mb-8"></div>

          <div className="space-y-5">

            {[1,2,3].map((item)=>(
              <div
                key={item}
                className="bg-zinc-900 p-5 rounded-xl space-y-4"
              >
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <div className="h-5 w-40 bg-zinc-800 rounded"></div>
                    <div className="h-4 w-56 bg-zinc-800 rounded"></div>
                  </div>

                  <div className="h-5 w-12 bg-zinc-800 rounded"></div>
                </div>

                <div className="h-4 w-full bg-zinc-800 rounded"></div>
                <div className="h-4 w-3/4 bg-zinc-800 rounded"></div>

                <div className="h-3 w-24 bg-zinc-800 rounded"></div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailSkeleton;