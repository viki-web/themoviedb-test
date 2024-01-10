import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import Slider from 'react-slick';

const GenreListing = ({ customGenreId }) => {

    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        // Fetch genre movies using the customGenreId
        const genreMovies = await fetchMovies('discover/movie', {
          with_genres: customGenreId,
        });

        setMovies(genreMovies.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching genre movies:', error);
        setLoading(false);
      }
    };

    const fetchGenreName = async () => {
      try {
        // Fetch the list of genres
        const genresResponse = await fetchMovies('genre/movie/list');
        const genres = genresResponse.genres;

        // Find the genre name for the given genre ID
        const selectedGenre = genres.find((genre) => genre.id === customGenreId);

        // Set the genre name in state
        setGenreName(selectedGenre ? selectedGenre.name : '');
      } catch (error) {
        console.error('Error fetching genre name:', error);
      }
    };
    // Ensure customGenreId is being passed correctly

    fetchGenreName();
    fetchGenreMovies();
  }, [customGenreId]);
  

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="ucm-area ucm-bg" data-background="../img/bg/ucm_bg.jpg">
      <div className="container position-relative">
        <div className="row align-items-end mb-3">
          <div className="col-lg-6">
            <div className="section-title text-left text-lg-left text-white">
              <h3 className="title">Top {genreName}</h3>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div className="movie-item mb-50" key={movie.id}>
              <div className="movie-poster">
                <span className="rating">
                  <i className="fas fa-thumbs-up"></i> 3.5
                </span>
                <span className="date">2021</span>
                <a href={`movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GenreListing;