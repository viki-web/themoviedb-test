import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import MovieDBService from "../../services/movie-db";
import Item from "../../components/item/item";
import Slider from "react-slick";
import VideoFrame from "../../components/video-frame";
import moment from "moment/moment";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Movie = () => {
  const router = useRouter()
  const {mId} = router.query;
  const [loading, setLoading] = useState(true);
  const [moviesDetail, setMoviesDetail] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

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

  var videoSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const timeConvert = (n) => {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min";
  }
  

  useEffect(()=>{
    if(mId){
      fetchMovieDetail();
    }
  },[mId]);

  return(<>
   {loading?(
      <div className="container">
          <div>loading</div>
      </div>
    ):(<>
      <section className="section section--head section--head-fixed section--gradient section--details-bg">
      <div className="section__bg" style={{backgroundImage: 'url(//image.tmdb.org/t/p/w1280' + moviesDetail.backdrop_path + ')'}}></div>
      <div className="container">
        <div className="article">
          <div className="row">
            <div className="col-xl-3">
              <div className="card__cover">
                <a onClick={handleShow}>
                  <i className="fa-solid fa-play xl-icon"></i>
                  <img className="rounded" src={"//image.tmdb.org/t/p/w300"+moviesDetail.poster_path}/>
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-9">
            <div className="article__content">
							<h1>{moviesDetail.original_title}</h1>

							<ul className="list">
								<li><i className="fa-solid fa-star mr-1"></i> {moviesDetail.vote_average}</li>
								<li>{moment(moviesDetail.release_date).format("MMM Do YYYY")}</li>
								<li>{timeConvert(moviesDetail.runtime)}</li>
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
          <div className="mt-3 col-12">
          <Slider {...videoSettings}>
            {moviesDetail.videos.results.map((result, index)=>{
                return(<>
                    <VideoFrame data={result} index={index}/>
                  </>
                )
            })}
          </Slider>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>)}
  
  </>)
}

export default Movie
