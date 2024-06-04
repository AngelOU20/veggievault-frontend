import CategoryWrapper from '../../category/components/CategoryWrapper';
import {
  Hero,
  FeaturedSection,
  LatestRecipe,
  NewsLetter,
  AboutSection,
  CompanyLogo,
} from '../components';

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
