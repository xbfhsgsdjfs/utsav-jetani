// const API_KEY = "04c35731a5ee918f014970082a0088b1"
const BasicUrl = "https://api.themoviedb.org/3";
const IMGPATH = "https://image.tmdb.org/t/p/original";
const Imagew500 = "http://image.tmdb.org/t/p/w500";
const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
const Unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
const noPicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
const GenresURL = `${BasicUrl}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const unavailableLandscape = "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

const Homemovie = {
    fetchBanner: {
        url: `${BasicUrl}/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    },
    fetchTreading: {
        url: `${BasicUrl}/trending/all/day?api_key=${API_KEY}&language=en-US&page=2`,
        Title: "Treanding",
    },
    fetchNetfilxOriginal: {
        url: `${BasicUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
        Title: "NetfilxOriginal"
    },
    fetchMarvelMovie: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420|19551|38679|2301|13252`,
        Title: "Marvel"
    },
    fetchTopRated: {
        url: `${BasicUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        Title: "Top Rated",
    },
    fetchActionMovies: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
        Title: "Action",
    },
    fetchHorrorMovies: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
        Title: "Horror",
    },
    fetchComedyMovies: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
        Title: "Comedy",
    },
    fetchRomanceMovies: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
        Title: "Romance",
    },
    fetchDocumentariesMovies: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
        Title: "Documentaries",
    }
}
const TVSHOW = {
    fetchTvShowBanner: {
        url: `${BasicUrl}/discover/tv?api_key=${API_KEY}&page=3&region=US&language=EN`,
    },
    fetchTreadingTvShow: {
        url: `${BasicUrl}/discover/tv?api_key=${API_KEY}&&language=en-US&page=1`,
        Title: "Trending"
    },
    fetchTopRatedTvShow: {
        url: `${BasicUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=2`,
        Title: "TV SHOW"
    },
}

const Movies = {
    fetchMovieBanner: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    },
    fetchUpComingMovie: {
        url: `${BasicUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`,
        Title: "UPcoming"
    },
    fetchTreadingMovie: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
        Title: "Trending"
    },
    fetchTopRatedMovie: {
        url: `${BasicUrl}/discover/movie?api_key=${API_KEY}&&language=en-US&page=2`,
        Title: "Top Rateing"
    }
}
export { BasicUrl, API_KEY, GenresURL, Homemovie, TVSHOW, Movies, IMGPATH, Imagew500, Unavailable, noPicture, unavailableLandscape };