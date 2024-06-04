import { FaQuoteLeft } from 'react-icons/fa';
import aboutImage from '../../assets/about-image.webp';

const About = () => {
  return (
    <div className="px-6 lg:px-12 py-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          About Us
        </h1>

        <div className="mb-10">
          <img
            src={aboutImage}
            alt="Healthy Food"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Welcome to our healthy recipes website! Our mission is to provide
            you with delicious, nutritious, and easy-to-make recipes that will
            help you maintain a healthy lifestyle. We believe that healthy
            eating should be accessible to everyone, and our goal is to inspire
            you to create wholesome meals that you and your family will love.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Handpicked ingredients for the best nutritional value</li>
            <li>Easy-to-follow recipes for all skill levels</li>
            <li>Focus on balanced and wholesome meals</li>
            <li>Supportive community of like-minded food enthusiasts</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-64 p-8">
            <div className="w-full md:w-8/12 text-xl md:text-2xl text-gray-800">
              <FaQuoteLeft className="float-left mr-2 text-secondary" />
              <p>
                &quot;Eating healthy is not just about losing weight. It’s about
                feeling better physically and mentally. Our recipes are crafted
                to bring out the best in you, nourishing your body and
                soul.&quot;
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="text-secondary font-semibold text-lg md:text-xl">
                - Healthy Recipes Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Head Chef',
    imgSrc: 'https://source.unsplash.com/200x200/?chef',
  },
  {
    name: 'Jane Smith',
    role: 'Nutritionist',
    imgSrc: 'https://source.unsplash.com/200x200/?nutritionist',
  },
  {
    name: 'Emily Johnson',
    role: 'Recipe Developer',
    imgSrc: 'https://source.unsplash.com/200x200/?food',
  },
  {
    name: 'Michael Brown',
    role: 'Food Blogger',
    imgSrc: 'https://source.unsplash.com/200x200/?blogger',
  },
];

export default About;
