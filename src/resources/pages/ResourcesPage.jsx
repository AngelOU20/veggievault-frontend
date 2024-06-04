import React from 'react';

const blogData = [
  {
    title: 'Te nulla oportere reprimique his dolorum',
    date: 'June 1, 2020',
    views: '2.1K views',
    imgSrc: 'https://source.unsplash.com/200x200/?fashion?1',
    category: 'Convenire',
  },
  {
    title: 'Te nulla oportere reprimique his dolorum',
    date: 'June 2, 2020',
    views: '2.2K views',
    imgSrc: 'https://source.unsplash.com/200x200/?fashion?2',
    category: 'Convenire',
  },
  {
    title: 'Te nulla oportere reprimique his dolorum',
    date: 'June 3, 2020',
    views: '2.3K views',
    imgSrc: 'https://source.unsplash.com/200x200/?fashion?3',
    category: 'Convenire',
  },
  {
    title: 'Te nulla oportere reprimique his dolorum',
    date: 'June 4, 2020',
    views: '2.4K views',
    imgSrc: 'https://source.unsplash.com/200x200/?fashion?4',
    category: 'Convenire',
  },
];

const ResourcesPage = () => {
  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Resources
      </h1>

      <article className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              Support the suppression of the father
            </h2>
            <p className="text-sm mb-16">
              Regarding various errors, we act without commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((post, index) => (
              <React.Fragment key={index}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={post.imgSrc}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-1 uppercase">
                      {post.category}
                    </p>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <p>{post.date}</p>
                      <p>{post.views}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ResourcesPage;
