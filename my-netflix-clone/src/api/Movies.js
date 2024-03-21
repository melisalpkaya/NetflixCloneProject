const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b822441b5788e5af34364bd716eab043';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL}/${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: "Sadece Netflix'te",
                items: await basicFetch(`discover/tv?with_network=213&language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Gündemdekiler',
                items: await basicFetch(`trending/all/week?language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: "Netflix'te Popüler",
                items: await basicFetch(`movie/top_rated?language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Aksiyon',
                items: await basicFetch(`discover/movie?with_genres=28&language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Komedi',
                items: await basicFetch(`discover/movie?with_genres=35&language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Korku',
                items: await basicFetch(`discover/movie?with_genres=27&language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romantik',
                items: await basicFetch(`discover/movie?with_genres=10749&language=tr-TR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Belgesel',
                items: await basicFetch(`discover/movie?with_genres=99&language=tr-TR&api_key=${API_KEY}`),
            },
        ]
    },

    getMovieInfo: async(movieId, type) => {
        const info = await basicFetch(`${type}/${movieId}?language=tr-TR&api_key=${API_KEY}`)
        return info;
    }
}