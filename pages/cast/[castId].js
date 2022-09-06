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

    return(<>
        <div>{castId}</div>
    </>)
}   

export default Cast