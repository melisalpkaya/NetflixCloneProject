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

    const handleAddToList = () => {
        // Burada içeriği bir listeye ekleyebilir ve localStorage'a kaydedebilirsiniz
        // Örneğin:
        const myList = JSON.parse(localStorage.getItem('myList')) || [];
        myList.push(item);
        localStorage.setItem('myList', JSON.stringify(myList));
    
        // Kullanıcıya bir geri bildirim gösterebilirsiniz
        alert('İçerik listeye eklendi!');
    
        // Eklenen içerikleri MyList'e taşıyın
        const myListItem = {
            title: item.original_name,
            overview: item.overview,
            backdrop_path: item.backdrop_path,
            vote_average: item.vote_average,
            number_of_seasons: item.number_of_seasons,
            genres: item.genres
        };
    
        // MyList bileşenine taşımak için yerel depoya (localStorage) ekleyin
        const myListItems = JSON.parse(localStorage.getItem('myListItems')) || [];
        myListItems.push(myListItem);
        localStorage.setItem('myListItems', JSON.stringify(myListItems));
    };
    

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
                            <button className="featured-favorite-button" onClick={handleAddToList}> + Listeme Ekle   </button>
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