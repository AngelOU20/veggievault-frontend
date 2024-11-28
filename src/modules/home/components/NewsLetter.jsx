export const NewsLetter = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto flex flex-col items-center p-10 ">
      <h3 className="text-secondary font-semibold text-center text-4xl leading-relaxed w-full sm:w-2/3 xl:w-1/2">
        Sign up for my weekly newsletter!
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Weekly emails with my latest recipes, cooking tips and tricks and
        product recommendations! You&apos;ll be set up in minutes
      </p>

      <div className="flex justify-center items-center flex-col md:flex-row mt-6 w-full md:px-8 gap-4 mb-20">
        <input
          className="flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629] w-full md:w-auto"
          type="text"
          placeholder="Name"
        />
        <input
          className="flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629] w-full md:w-auto"
          type="text"
          placeholder="Email Address"
        />
        <button className="mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 py-4 w-full md:w-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};
