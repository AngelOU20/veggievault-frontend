export const Skeleton = () => {
  return (
    <li className="container flex justify-center md:justify-start">
      <div className="mx-w-lg w-full">
        <div className="bg-gray-200 animate-pulse shadow-sm hover:shadow-md transition duration-500 rounded-lg">
          <div className="h-44 bg-gray-300 rounded-t-lg"></div>
          <div className="py-4 px-5 space-y-3">
            <div className="h-5 bg-gray-300 rounded"></div>
            <div className="h-1"></div>
            <div className="flex justify-between space-x-2">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
