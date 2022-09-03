import React, {useEffect, useState} from "react";
import MovieDBService from "../services/movie-db";
import InfiniteScroll from 'react-infinite-scroller';
import Item from "./item/item"; 

const MoviesListingInfinite = ({genere}) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)


    const fetchMovies = (page) => {
        console.log('function called')
        MovieDBService.getMovies(page, genere).then(payload =>{
            setMovies([...movies, ...payload.results]);
            setLoading(false);
            setPage(page+1)
            console.log(movies)
        }, error =>{
            console.log(error.message);
            setLoading(false);
        })
    }

    useEffect(()=>{
        fetchMovies();
    },[]);

    return(<>
    <div className="clearfix container">
        {loading?(
            <div>loading</div>
        ):(<>
            <InfiniteScroll className="row" pageStart={1} loadMore={fetchMovies} hasMore={true || false} loader={<div className="loader" key={0}>Loading ...</div>} >
                {movies.map((movie, index)=>{
                    return(<>
                        <div className="col-five infinite-col">
                            <Item data={movie} index={index} type={1}/>
                        </div>
                    </>)
                })}
            </InfiniteScroll>
        </>)}
    </div>
    </>)
}

export default MoviesListingInfinite;