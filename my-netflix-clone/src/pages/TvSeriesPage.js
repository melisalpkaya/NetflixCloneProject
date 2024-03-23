import React, { useEffect, useState } from 'react';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Movies from '../api/Movies';

function TvSeriesPage({ movieList }) {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadFeaturedMovie = async () => {
      const series = movieList.find(movie => movie.slug === 'tv-series');
      if (series) {
        const randomNumber = Math.floor(Math.random() * series.items.results.length);
        const chosen = series.items.results[randomNumber];
        const chosenInfo = await Movies.getMovieInfo(chosen.id, 'tv');
        setFeaturedMovie(chosenInfo);
      }
    };

    loadFeaturedMovie();
  }, [movieList]);

  // Sadece "tv-series" slug'ına sahip kategoriyi ve ana sayfada sadece "tv-series" olan kategoriyi filtrele
  const filteredMovieList = movieList.filter(item => item.slug === 'tv-series');

  return (
    <div className="page">
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      <section className="movie-list">
        {filteredMovieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key}></MovieRow>
        ))}
      </section>
    </div>
  );
}

export default TvSeriesPage;
