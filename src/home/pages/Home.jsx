import CategoryWrapper from '../../category/components/CategoryWrapper';
import { FeaturedSection } from '../components/FeaturedSection';
import { Hero } from '../components/Hero';
import LatestRecipe from '../components/LatestRecipe';

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>

      <FeaturedSection />

      <LatestRecipe />
    </div>
  );
};

export default Home;
