import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import MovieDBService from "../../services/movie-db";
import Item from "../../components/item/item";
import Slider from "react-slick";
import VideoFrame from "../../components/video-frame";
import moment from "moment/moment";

const Cast = () => {
    const router = useRouter()
    const {castId} = router.query;
    const [loading, setLoading] = useState(true);
    const [castDetail, setCastDetail] = useState([]);
  
    const fetchCastDetail = () => {
      MovieDBService.getCastDetail(castId).then(payload =>{
        setCastDetail(payload);
          setLoading(false);
          console.log(payload) 
      }, error =>{
          console.log(error.message);
          setLoading(false);
      })
    }

    useEffect(()=>{
        if(castId){
            fetchCastDetail();
        }
      },[castId]);

    return(<>
    {loading?(
        <div className="container">
            <div>loading</div>
        </div>
    ):(<>
      <section className="section section--head section--head-fixed section--gradient section--details-bg">
      <div className="section__bg" style={{backgroundImage: 'url(//image.tmdb.org/t/p/w1280' + castDetail.backdrop_path + ')'}}></div>
      <div className="container">
        <div className="article">
          <div className="row">
            <div className="col-xl-3">
              <div className="card__cover">
                  <img className="rounded" src={"//image.tmdb.org/t/p/w300"+castDetail.profile_path}/>
              </div>
            <div>
                <div className="mt-5 my-3">
                    <h5 className="categories__title">Personal Information</h5>
                </div>
                <div>Place of Birth : {castDetail.place_of_birth}</div>
                <div className="mt-2">Birthday : {moment(castDetail.birthday).format("MMM Do YYYY")}</div>
            </div>
            </div>
            <div className="col-12 col-xl-9">
                <div className="article__content">
                    <h1>{castDetail.name}</h1>



                    <div className="my-3">
                        <h5 className="categories__title">Biography</h5>
                    </div>
                    <div className="pre-wrap">{castDetail.biography}</div>
                </div>
            </div>
          </div>
        </div>

      </div>
      
      </section>


    </>)}
    </>)
}   

export default Cast