import React, { useEffect, useState } from 'react';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Movies from '../api/Content';

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


  return (
    <div className="page">
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      <section className="movie-list">
        {movieList.map((category, key) => (
          (category.slug === 'tv-series' || category.slug === 'trending-tv' ) &&  (
            <MovieRow title={category.title} items={category.items} key={key}></MovieRow>
          )
        ))}
      </section>
    </div>
  );
}

export default TvSeriesPage;
