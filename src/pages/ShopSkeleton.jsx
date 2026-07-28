const ShopSkeleton = () => {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden animate-pulse">
      {/* Image */}
      <div className="h-52 bg-zinc-800"></div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-zinc-800 rounded w-3/4"></div>

        <div className="h-3 bg-zinc-800 rounded w-full"></div>
        <div className="h-3 bg-zinc-800 rounded w-2/3"></div>

        <div className="flex justify-between items-center pt-2">
          <div className="h-6 w-20 bg-zinc-800 rounded"></div>
          <div className="h-5 w-12 bg-zinc-800 rounded"></div>
        </div>

        <div className="h-10 bg-zinc-800 rounded-lg mt-4"></div>
      </div>
      <div className="space-y-3 p-4">
        <div className="group flex bg-zinc-900 rounded p-4 gap-x-6 justify-between">
          <div className="flex flex-col gap-2">
            <div className="h-60 w-80 bg-zinc-800 rounded"></div>
            <div className="h-6 bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-zinc-800 rounded w-full"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-60 w-80 bg-zinc-800 rounded"></div>
            <div className="h-6 bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-zinc-800 rounded w-full"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-60 w-80 bg-zinc-800 rounded"></div>
            <div className="h-6 bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-zinc-800 rounded w-full"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-60 w-80 bg-zinc-800 rounded"></div>
            <div className="h-6 bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-zinc-800 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSkeleton;
