import React from 'react';

function MyList() {
    //listeye eklenen filmler için oluşturuldu
    // localStorage'dan eklenen film listesini al
    const myList = JSON.parse(localStorage.getItem('myList')) || [];

    // myList içerisindeki çoklu filmleri tutacak bir dizi 
    const uniqueMovies = [];

    // Her film için myList içinde çoklu olup olmadığını kontrol 
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
