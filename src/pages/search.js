import { useState } from 'react';
import { fetchMovies } from '../utils/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    try {
      const data = await fetchMovies(`search/movie?query=${query}`);
      setResults(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;