import React from 'react'
import './FeaturedMovie.css';

function FeaturedMovie({item}) {
    const yearDate = new Date(item.first_air_date);

    const genres = [];
    
    item.genres.forEach((value, index) => {
        genres.push(value.name)
    })

    let description = item.overview;
    if(description.length > 140) {
        description = description.substring(0, 140) + '...';
    }

    return (
        <div className="featured-movie" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points">{item.vote_average} puan</div>
                        <div className="featured-year">{yearDate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} sezon</div>
                    </div>
                    <div className="featured-description">{description}</div>
                    <div className="featured-buttons">
                            <button className="featured-watch-button"> ► İzle </button>
                            <button className="featured-favorite-button"> + Listeme Ekle   </button>
                    </div>
                    <div className="featured-genres">
                        Tür: {genres.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie