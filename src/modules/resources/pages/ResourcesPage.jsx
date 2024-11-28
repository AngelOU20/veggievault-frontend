const blogData = [
  {
    title: '10 Healthy Breakfast Ideas to Start Your Day Right',
    date: 'June 1, 2020',
    views: '2.1K views',
    imgSrc: 'https://source.unsplash.com/200x200/?healthy-breakfast',
    category: 'Breakfast',
  },
  {
    title: '5 Quick and Easy Lunch Recipes',
    date: 'June 2, 2020',
    views: '2.2K views',
    imgSrc: 'https://source.unsplash.com/200x200/?healthy-lunch',
    category: 'Lunch',
  },
  {
    title: 'Top 10 Dinners for a Balanced Diet',
    date: 'June 3, 2020',
    views: '2.3K views',
    imgSrc: 'https://source.unsplash.com/200x200/?healthy-dinner',
    category: 'Dinner',
  },
  {
    title: 'Healthy Snacks for the Whole Family',
    date: 'June 4, 2020',
    views: '2.4K views',
    imgSrc: 'https://source.unsplash.com/200x200/?healthy-snacks',
    category: 'Snacks',
  },
];

const ResourcesPage = () => {
  return (
    <div className="px-6 lg:px-12 py-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center mb-12 font-semibold text-gray-800 sm:text-5xl sm:leading-relaxed">
          Resources
        </h1>

        <article className="py-6 sm:py-12">
          <div className="container mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Discover Healthy Eating Tips & Recipes
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Explore our curated selection of healthy recipes and tips to
                help you maintain a nutritious and balanced diet.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {blogData.map((post, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                  <img
                    src={post.imgSrc}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs text-gray-500 mb-1 uppercase">
                      {post.category}
                    </p>
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">
                      {post.title}
                    </h2>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <p>{post.date}</p>
                      <p>{post.views}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ResourcesPage;
