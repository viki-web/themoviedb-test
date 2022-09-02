import { apiPath } from "../constants/api-path";
import { fetcher } from "../helpers/fetcher.helper";

const domain = process.env.MOVIEDB_ENDPOINT;

const getMovies= (page=null, genere=null)=> {

    var genere = genere !="" ? "&with_genres="+genere : '';

    let url = `${domain}/3/discover/movie?api_key=e870bf92a3befaf1589d3bc282f03616&language=en-US${genere}&page=${page}`;
    return fetcher(url,{
        method: 'GET',
    }, true).then(data=>{
        return Promise.resolve(data);
    })
}

const getMoviesDetail = (movie_id)=> {
    let url = `${domain}/3/movie/${movie_id}?api_key=e870bf92a3befaf1589d3bc282f03616&append_to_response=videos,credits,recommendations`;
    return fetcher(url,{
        method: 'GET',
    }, true).then(data=>{
        return Promise.resolve(data);
    })
}

const MovieDBService = {
    getMovies,
    getMoviesDetail
}

export default MovieDBService