import CategoryWrapper from '../../category/components/CategoryWrapper';
import { AboutSection } from '../components/AboutSection';
import { CompanyLogo } from '../components/CompanyLogo';
import { FeaturedSection } from '../components/FeaturedSection';
import { Hero } from '../components/Hero';
import { LatestRecipe } from '../components/LatestRecipe';
import { NewsLetter } from '../components/NewsLetter';

const Home = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>

      <FeaturedSection />
      <LatestRecipe />
      <NewsLetter />
      <AboutSection />
      <CompanyLogo />
    </div>
  );
};

export default Home;
