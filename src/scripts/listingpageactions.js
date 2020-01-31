
newlistingdatacontroller.movieDetail();


window.onscroll = function(ev) {

    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight -2) {
        httpconstants.page++;

        console.log((window.innerHeight + window.pageYOffset) , document.body.offsetHeight - 2)
        console.log(httpconstants.page);
        newlistingdatacontroller.movieDetail();
    }
};

document.getElementById("searchMoviesForm").onsubmit = function (event) {
    movie.cleardata();
    httpconstants.sortData = false;
    httpconstants.searchval = document.getElementById("searchField").value;
    newlistingdatacontroller.movieDetail();
    event.preventDefault();
};

document.getElementById("sortUpcoming").onclick = function () {
    movie.cleardata();
    httpconstants.sortData = false;
    newlistingdatacontroller.movieDetail()
};

document.getElementById("sordTopRated").onclick = function () {
    movie.cleardata();
    httpconstants.sortData = true;
    newlistingdatacontroller.movieDetail();
};

// add custom js below

