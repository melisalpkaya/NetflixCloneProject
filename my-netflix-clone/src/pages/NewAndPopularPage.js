import React, { useEffect, useState } from 'react';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Movies from '../api/Movies';

function NewAndPopularPage({ movieList }) {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadFeaturedMovie = async () => {
      const trending = movieList.find(movie => movie.slug === 'trending');
      if (trending) {
        const randomNumber = Math.floor(Math.random() * trending.items.results.length);
        const chosen = trending.items.results[randomNumber];
        const chosenInfo = await Movies.getMovieInfo(chosen.id, 'movie'); // 'movie' türünden film bilgilerini alıyoruz
        setFeaturedMovie(chosenInfo);
      }
    };

    loadFeaturedMovie();
  }, [movieList]);

  return (
    <div className="page">
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      <section className="movie-list">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key}></MovieRow>
        ))}
      </section>
    </div>
  );
}

export default NewAndPopularPage;
