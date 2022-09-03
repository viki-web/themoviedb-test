import React, {useEffect, useState} from "react";
import MoviesListing from "../components/movies";

function HomePage() {
    const [page, setPage] = useState(1);

    return (<>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Now Playing</h2>
            </div>
          </div>
          <MoviesListing page={page}/>
        </div>
      </div>

      <div className="section section--pb0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Top Thriller</h2>
            </div>
          </div>
          <MoviesListing genere={878}/>
        </div>
      </div>

      <div className="section section--pb0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Top Sci-Fi</h2>
            </div>
          </div>
          <MoviesListing genere={99} page={page}/>
        </div>
      </div>

      <div className="section section--pb0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Top Kids</h2>
            </div>
          </div>
          <MoviesListing genere={16} page={page}/>
        </div>
      </div>

      <div className="section section--pb0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Top Horror</h2>
            </div>
          </div>
          <MoviesListing genere={53} page={page}/>
        </div>
      </div>

      <div className="section section--pb0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Now playing</h2>
            </div>
          </div>
          <MoviesListing genere={27} page={page}/>
        </div>
      </div>
    </>)
  }
  
export default HomePage