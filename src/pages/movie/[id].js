import { useRouter } from 'next/router';
import { fetchMovies } from '../../utils/api';

const MovieDetail = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>

    <section className="movie-details-area" data-background={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}>
        <div className="container">
            <div className="row align-items-center position-relative">
                <div className="col-xl-3 col-lg-4">
                    <div className="movie-details-img">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100' alt=""/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8">
                    <div className="movie-details-content">
                        <h2>{movie.title}</h2>
                        <div className="banner-meta">
                            <ul>
                                <li className="quality">
                                    <span>Pg 18</span>
                                    <span>hd</span>
                                </li>
                                <li className="category">
                                    <a href="#">Romance,</a>
                                    <a href="#">Drama</a>
                                </li>
                                <li className="release-time">
                                    <span><i className="far fa-calendar-alt"></i> 2021</span>
                                    <span><i className="far fa-clock"></i> 128 min</span>
                                </li>
                            </ul>
                        </div>
                        <p>{movie.overview}</p>
                        <div className="movie-details-prime mt-5">
                            <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="btn popup-video"><i className="fas fa-play"></i> Watch Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="tv-series-area tv-series-bg" data-background="../img/bg/tv_series_bg02.jpg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center mb-50">
                        <span className="sub-title">Best TV Series</span>
                        <h2 className="title">World Best TV Series</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="movie-item mb-50">
                        <div className="movie-poster">
                            <a href="movie-details.html"><img src="../img/poster/ucm_poster09.jpg" alt=""/></a>
                        </div>
                        <div className="movie-content">
                            <div className="top">
                                <h5 className="title"><a href="movie-details.html">Women's Day</a></h5>
                                <span className="date">2021</span>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li><span className="quality">hd</span></li>
                                    <li>
                                        <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                                        <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="movie-item mb-50">
                        <div className="movie-poster">
                            <a href="movie-details.html"><img src="../img/poster/ucm_poster10.jpg" alt=""/></a>
                        </div>
                        <div className="movie-content">
                            <div className="top">
                                <h5 className="title"><a href="movie-details.html">The Perfect Match</a></h5>
                                <span className="date">2021</span>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li><span className="quality">4k</span></li>
                                    <li>
                                        <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                                        <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="movie-item mb-50">
                        <div className="movie-poster">
                            <a href="movie-details.html"><img src="../img/poster/ucm_poster03.jpg" alt=""/></a>
                        </div>
                        <div className="movie-content">
                            <div className="top">
                                <h5 className="title"><a href="movie-details.html">The Dog Woof</a></h5>
                                <span className="date">2021</span>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li><span className="quality">hd</span></li>
                                    <li>
                                        <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                                        <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="movie-item mb-50">
                        <div className="movie-poster">
                            <a href="movie-details.html"><img src="../img/poster/ucm_poster04.jpg" alt=""/></a>
                        </div>
                        <div className="movie-content">
                            <div className="top">
                                <h5 className="title"><a href="movie-details.html">The Easy Reach</a></h5>
                                <span className="date">2021</span>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li><span className="quality">hd</span></li>
                                    <li>
                                        <span className="duration"><i className="far fa-clock"></i> 128 min</span>
                                        <span className="rating"><i className="fas fa-thumbs-up"></i> 3.5</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const movie = await fetchMovies(`movie/${id}`);
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {
      notFound: true,
    };
  }
}

export default MovieDetail;