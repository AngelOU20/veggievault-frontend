import featuredImage from '../../../assets/about-section.webp';

export const AboutSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="text-start">
        <h2 className="text-3xl font-semibold text-secondary md:text-4xl xl:text-5xl leading-normal md:leading-normal xl:leading-relaxed">
          Vegan foodie who loves to experiment with recipes
        </h2>
        <p className="text-lg md:text-xl mt-4 text-[#5c5c5c]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          officia nulla vitae distinctio quidem, vel ullam beatae odit eligendi
          consectetur ab, quibusdam nesciunt porro provident soluta ipsum quod
          adipisci unde.
        </p>

        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg">
              View Recipe
            </button>
          </div>
        </div>
      </div>
      <img
        src={featuredImage}
        alt="featured image"
        className="rounded-3xl w-full sm:w-1/2"
      />
    </div>
  );
};
