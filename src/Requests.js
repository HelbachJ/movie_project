const key = "c965b2fb91085691cf012204562a6500";

const requests = {
    requestPopular :`https://api.themoviedb.org/3/movie/popular?api_key=${key}&languages=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&languages=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languages=en-US&page=2`,
    requestHorror : `https://api.themoviedb.org/3/movie/movie?api_key=${key}&languages=en-US&query=horror&page=1&include`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&languages=en-US&page=1`,
};

export default requests;