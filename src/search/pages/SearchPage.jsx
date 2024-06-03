import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Card } from '../../components/Card/Card';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('query');

    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('http://localhost:3000/api/recipes', {
          params: { q: query },
        });
        setResults(response.data);
      } catch (error) {
        setError(error.message || 'Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>

      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded realtive flex items-center">
        <GrSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          value={query}
          onChange={handleSearch}
          className="outline-none w-full placeholder:text-[#1b2629]"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          required
        />
      </div>

      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results &&
          results?.map((result) => (
            <React.Fragment key={result.name}>
              <Card item={result} />
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
};

export default SearchPage;
