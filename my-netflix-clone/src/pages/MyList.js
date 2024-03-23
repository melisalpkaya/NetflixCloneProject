import React from 'react';

function MyList() {
    // localStorage'dan myList'i al
    const myList = JSON.parse(localStorage.getItem('myList')) || [];

    // myList içerisindeki benzersiz filmleri tutacak bir dizi oluşturalım
    const uniqueMovies = [];

    // Her film için myList içinde benzersiz olup olmadığını kontrol edelim
    myList.forEach(item => {
        if (!uniqueMovies.some(movie => movie.id === item.id)) {
            uniqueMovies.push(item);
        }
    });

    return (
        <div style={{ margin: '100px' }}>
            <h1>Listem</h1>
            <div className="movie-list" style={{ margin: '50px' }}>
                {uniqueMovies.map((item, index) => (
                    <div key={index} className="movie-row-item">
                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_name} />
                      
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyList;
