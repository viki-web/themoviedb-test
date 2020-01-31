class movieData {
    listMovies(movie) {
        if (movie.poster_path == null) {
            movieimageurl = '/src/images/movieplaceholder.png'
        } else {
            movieimageurl = httpconstants.imageUrl + movie.poster_path
        }

        html = `<div class="col-6 movie-wrapper"> 
                    <div class="movie-items clearfix">
                        <div class="img" style="background-image:url(${movieimageurl})"></div>
                        <div class="movie-info">
                            <h3><a href="movie.html#${movie.id}" class="title">${movie.title}</a></h3>
                            <div class="desc">
                                ${movie.overview.slice(0, 150) + '...'}
                            </div>
                            <div class="readmore">
                                <a href="movie.html#${movie.id}" class="">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>`;
        httpconstants.container.insertAdjacentHTML("beforeend", html);
    }

    noData() {
        html = `<div> 
                  no data found
              </div>`;
        httpconstants.container.insertAdjacentHTML("beforeend", html);
    }

    movieDetail(movieResponse) {

        html = `<div class="custom_bg" style="background-image:url(https://image.tmdb.org/t/p/original/${movieResponse.backdrop_path})">
        <section class="movie-data">
            <div class="container">
    
                <div class="movie-wrapper">
                    <div class="movie-items clearfix">
                        <div id="show-popup" class="img"
                            style="background-image:url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieResponse.poster_path})">
                        </div>
                        <div class="movie-info">
                            <h3><a href="movie.html#${movieResponse.id}" class="title">${movieResponse.title}</a></h3>
                            <div class="desc">
                                ${movieResponse.overview}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <div id="videopopup" class="video-popup">
        <div class="video-popup-container">
            <button id="close-popup" class="close"><i class="fa fa-times" aria-hidden="true"></i></button>
            <div class="video-frame">
                <iframe class="youtube-video" width="100%" height="100%"
                    src="https://www.youtube.com/embed/${movieResponse.videos.results[0].key}" allowscriptaccess="always">
                </iframe>
            </div>
        </div>
    </div>`;
        httpconstants.container.insertAdjacentHTML("beforeend", html);
    }

    cleardata() {
        httpconstants.page = 1;
        httpconstants.sortData = false;
        httpconstants.container.innerHTML = "";
    }
}

movie = new movieData();