// import PropTypes from 'prop-types';
import featuredImage from '../../assets/feature.webp';

export const FeaturedSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="relative">
        <span className="absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wide">
          Featured Recipe
        </span>
        <img src={featuredImage} alt="featured image" className="rounded-md" />
      </div>

      <div className="text-start xl:w-11/12 lg:w-[170%] ">
        <h2 className="text-3xl font-semibold text-secondary lg:text-4xl xl:text-5xl xl:leading-relaxed lg:leading-relaxed">
          Pineapple + Smoked Jackfrauit Pizza
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
    </div>
  );
};

// FeaturedSection.propTypes = {};
