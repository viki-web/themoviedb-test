import React, {useEffect, useState} from "react";
import Link from 'next/link';
import MoviesListingInfinite from "../../components/movies-infinite";

const Movies = () => {
    return(<>
        <MoviesListingInfinite/>
    </>)
}

export default Movies;