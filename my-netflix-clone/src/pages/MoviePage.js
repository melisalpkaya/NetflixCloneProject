import React, { useEffect, useState } from 'react';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Movies from '../api/Content';

function MoviePage() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await Movies.getHomeList();
      setMovieList(movies);
      
      
      const moviesCategory = movies.find(category => category.slug === 'movies');
      if (moviesCategory && moviesCategory.items.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * moviesCategory.items.results.length);
        const randomMovieId = moviesCategory.items.results[randomIndex].id;
        const chosenMovieInfo = await Movies.getMovieInfo(randomMovieId, 'movie');
        setFeaturedMovie(chosenMovieInfo);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      <section className="movie-list">
        
        {movieList.map((category, key) => (
          
          (category.slug === 'movies' || category.slug === 'toprated' || category.slug === 'comedy' || category.slug === 'horror') &&  (
            <MovieRow title={category.title} items={category.items} key={key}></MovieRow>
          )
        ))}
      </section>
    </div>
  );
}

export default MoviePage;
