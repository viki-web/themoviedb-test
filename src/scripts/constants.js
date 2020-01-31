
class httpConstants {
    apiurl = 'https://api.themoviedb.org/3';
    apikey = 'e870bf92a3befaf1589d3bc282f03616';
    imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    
    page = 1;
    html;
    container = document.getElementById('moviesContainer');
    searchval;
    sortData = false;
    url;
    hash;
}   

httpconstants = new httpConstants();

console.log('constants');