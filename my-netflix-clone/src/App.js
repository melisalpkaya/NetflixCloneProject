import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './api/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import TvSeriesPage from './pages/TvSeriesPage';
import MoviePage from './pages/MoviePage';
import MyList from './pages/MyList';

import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [collapsedHeader, setCollapsedHeader] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await Movies.getHomeList();
      setMovieList(movies);

      const originals = movies.find(movie => movie.slug === 'originals');
      if (originals) {
        const randomNumber = Math.floor(Math.random() * originals.items.results.length);
        const chosen = originals.items.results[randomNumber];
        const chosenInfo = await Movies.getMovieInfo(chosen.id, 'tv');
        setFeaturedMovie(chosenInfo);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 50) {
        setCollapsedHeader(true);
      } else {
        setCollapsedHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Router>
      <div className="page">
        <Header collapsed={collapsedHeader} />
        <Routes>
          <Route path='/' element={<HomePage featuredMovie={featuredMovie} movieList={movieList} />} />
          <Route path='/tv-series' element={<TvSeriesPage movieList={movieList} />} />
          <Route path='/movies' element={<MoviePage movieList={movieList} />} />
          <Route path='/my-list' element={<MyList  />} />
         
        </Routes>
        <Footer />
        {movieList.length === 0 && (
          <div className="loading">
            <img src="https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Loading" />
          </div>
        )}
      </div>
    </Router>
  );
}

function HomePage({ featuredMovie, movieList }) {
  return (
    <>
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      <section className="movie-list">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key}></MovieRow>
        ))}
      </section>
    </>
  );
}

export default App;
