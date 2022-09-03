import React, {useEffect, useState} from "react";
import MovieDBService from "../services/movie-db";
import Link from 'next/link';
import Item from "./item/item";
import Slider from "react-slick";

const MoviesListing = ({genere, page}) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = () => {
        console.log('function called');
        console.log('here 2------'+page);
        MovieDBService.getMovies(page, genere).then(payload =>{
            setMovies([...movies, ...payload.results]);
            setLoading(false);
            console.log(movies)
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    };

    useEffect(()=>{
        fetchMovies();
    },[]);

    return(<>
        <div className="">
            {loading?(
                <div>loading</div>
            ):(<>
                <Slider {...settings}>
                {movies.map((movie, index)=>{
                    return(<>
                        <Item data={movie} index={index} type={1}/>
                        </>
                    )
                })}
                </Slider>
            </>)}
        </div>
    </>)
}

export default MoviesListing;