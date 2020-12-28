const API_KEY = "855a3c04bb9186bf619c6a3812286c0c"

const genres = {
    action: 28,
    adventure: 12, 
    animation: 16, 
    comedy: 35, 
    crime: 80, 
    documentary: 99, 
    drama: 18, 
    family: 10751,
    fantasy: 14, 
    horror: 27, 
    scifi: 878, 
    romance: 10749
}

const requests = {
    fetchMostPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.action}&sort_by=popularity.desc`,
    fetchAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.adventure}&sort_by=popularity.desc`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.animation}&sort_by=popularity.desc`,
    fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.comedy}&sort_by=popularity.desc`,
    fetchCrime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.crime}&sort_by=popularity.desc`,
    fetchDocumentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.documentary}&sort_by=popularity.desc`,
    fetchDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.drama}&sort_by=popularity.desc`,
    fetchFamily: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.family}&sort_by=popularity.desc`,
    fetchFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.fantasy}&sort_by=popularity.desc`,
    fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.horror}&sort_by=popularity.desc`,
    fetchScifi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.scifi}&sort_by=popularity.desc`,
    fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres.romance}&sort_by=popularity.desc`,

}


export default requests; 