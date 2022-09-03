import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import MovieDBService from "../../services/movie-db";
import Item from "../../components/item/item";
import Slider from "react-slick";

const Movie = () => {
  const router = useRouter()
  const {mId} = router.query;
  const [loading, setLoading] = useState(true);
  const [moviesDetail, setMoviesDetail] = useState([]);

  const fetchMovieDetail = () => {
    MovieDBService.getMoviesDetail(mId).then(payload =>{
        setMoviesDetail(payload);
        setLoading(false);
        console.log(payload) 
    }, error =>{
        console.log(error.message);
        setLoading(false);
    })
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow:2,
            slidesToScroll: 1
          }
        }
      ]
};

  useEffect(()=>{
    if(mId){
      fetchMovieDetail();
    }
  },[mId]);

  return(<>
   {loading?(
        <div>loading</div>
    ):(<>
      <section className="section section--head section--head-fixed section--gradient section--details-bg">
      <div className="section__bg" style={{backgroundImage: 'url(//image.tmdb.org/t/p/w1280' + moviesDetail.backdrop_path + ')'}}></div>
      <div className="container">
        <div className="article">
          <div className="row">
            <div className="col-xl-3">
              <div className="card__cover">
                <a href={"/server/"+moviesDetail.id} >
                  <i className="fa-solid fa-play xl-icon"></i>
                  <img className="rounded" src={"//image.tmdb.org/t/p/w300"+moviesDetail.poster_path}/>
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-9">
            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="article__trailer open-video">
							Trailer
						</a>
            <div className="article__content">
							<h1>{moviesDetail.original_title}</h1>

							<ul className="list">
								<li><i className="fa-solid fa-star mr-1"></i> 9.7</li>
								<li>Action</li>
								<li>2021</li>
								<li>1 h 42 min</li>
								<li>16+</li>
							</ul>

							<p>{moviesDetail.overview}</p>
						</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-8">

              <div className="categories">
                <h3 className="categories__title">Genres</h3>

                {moviesDetail.genres.map((genere, index)=>{
                    return(<>
                        <a href="" className="categories__item">{genere.name}</a>
                        </>
                    )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <h3 className="categories__title">Trailers</h3>
          </div>
          <div className="mt-3">
          
          {moviesDetail.videos.results.map((result, index)=>{
                    return(<>
                        <div>{result.name}</div>
                      </>
                    )
                })}
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <h3 className="categories__title">Casts</h3>

            <div className="mt-3">
              <Slider {...settings}>
                {moviesDetail.credits.cast.map((cast, index)=>{
                    return(<>
                        <Item data={cast} index={index} type={2}/>
                      </>
                    )
                })}
              </Slider>
            </div>
          </div>

          <div className="col-12 mt-3">
            <h3 className="categories__title">You may also like</h3>

            <div className="mt-3">
              <Slider {...settings}>
              {moviesDetail.recommendations.results.map((recommentaion, index)=>{
                  return(<>
                      <Item data={recommentaion} index={index} type={1}/>
                  </>)
              })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      
      </section>


    </>)}
  
  </>)
}

export default Movie
