import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import MovieDBService from "../../services/movie-db";
import Item from "../../components/item/item";
import Slider from "react-slick";

const ServerSelection = () => {
  const router = useRouter()
  const {server} = router.query;
  
  const server1 = () =>{
    window.location.assign(`https://v2.vidsrc.me/embed/${server}/`)
  }

  const server2 = () =>{
    window.location.assign(`https://v2.vidsrc.me/embed/${server}/`)
  }

  const server3 = () =>{
    window.location.assign(`https://v2.vidsrc.me/embed/${server}/`)
  }

  return(<>
   postid {server};

   <button onClick={server1}>server 1</button>
   <button onClick={server2}>server 2</button>
   <button onClick={server3}>server 3</button>
  </>)
}

export default ServerSelection
