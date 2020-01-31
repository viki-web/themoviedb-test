
class listingdatacontroller {
    movieDetail = function () {

        if (!httpconstants.hash && !httpconstants.sortData && httpconstants.searchval == "" || !httpconstants.hash && !httpconstants.sortData && httpconstants.searchval == undefined) {
            url = httpconstants.apiurl + '/movie/upcoming?api_key=' + httpconstants.apikey + '&language=en-US&page=' + httpconstants.page;
        } else if (httpconstants.sortData) {
            url = httpconstants.apiurl + '/movie/top_rated?api_key=' + httpconstants.apikey + '&language=en-US&page=' + httpconstants.page;
        } else if (httpconstants.hash) {
            //url = httpconstants.apiurl +'/movie/top_rated?api_key='+ httpconstants.apikey +'&language=en-US&page='+ httpconstants.page;
            url = httpconstants.apiurl + '/movie/'+httpconstants.hash+'?api_key='+ httpconstants.apikey +'&append_to_response=videos';
        } else {
            url = httpconstants.apiurl + '/search/movie?api_key=' + httpconstants.apikey + '&language=en-US&query=' + httpconstants.searchval + '&page=1&include_adult=false';
        }

        fetch(url).
        then(resp => resp.json()).
        then(function (response) {

            console.log(url)
            if (httpconstants.hash) {
                let movieDetailsresponse = response;
                movie.movieDetail(movieDetailsresponse);

            } else {

                let movieList = response.results;
                if (httpconstants.page >= response.total_pages) {
                    return;
                }
                if (movieList && movieList.length) {
                    return movieList.map(function (movieItem) {
                        movie.listMovies(movieItem);
                    });
                } else {
                    movie.noData();
                }
            }

        }).
        catch(function (error) {
            console.log(error);
            //alert('Something went wrong please try after some time');
        });
    }
};

newlistingdatacontroller = new listingdatacontroller();
