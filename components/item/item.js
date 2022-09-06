import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from "moment/moment";

const Item = ({data, index, type}) => {
    var poster_path = (data.poster_path)?("//image.tmdb.org/t/p/w300"+data.poster_path):('https://i.ibb.co/Q9Y7ck1/placeholder.png');
    var profile_path = (data.profile_path)?("//image.tmdb.org/t/p/w300"+data.profile_path):('https://i.ibb.co/Q9Y7ck1/placeholder.png');
    return (<>
        <div key={data.id} className="card mx-3">
            {
                (() => {
                    if(type==1) {
                        return (<>
                            <div className="">
                                <a href={"/movie/"+data.id} className="card__cover">
                                    <span className="card__rating"><i className="fa-solid fa-star mr-1"></i> {data.vote_average}</span>
                                    <i className="fa-solid fa-play icon"></i>
                                    <img src={poster_path}/>
                                </a>
                            </div>
                            <h5 className='card__title'>
                            <Link href={"/movie/"+data.id}>
                                <a>{data.original_title}</a>
                            </Link>
                            </h5>
                            <ul className="card__list">
                                <li>Movie</li>
                                <li>{moment(data.release_date).format("YYYY")}</li>
                            </ul>
                        </>)
                    } else if (type==2) {
                        return (<>
                            <div className="card__cover">
                                <a href={"/cast/"+data.id}>
                                    <img src={profile_path}/>
                                </a>
                            </div>
                            <h5 className='card__title'>
                            <Link href={"/cast/"+data.id}>
                                <a>{data.name}</a>
                            </Link>
                            </h5>
                            <ul className="card__list">
                                <li>as {data.character}</li>
                            </ul>
                        </>)
                    } else {
                        return (<>
                            <div></div>
                        </>)
                    }
                })()  
            } 
        </div>
    </>)
}

export default Item