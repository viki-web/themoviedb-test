import React from 'react';
import GenreListing from '../components/GenreListing';
import BannerArea from '../components/BannerArea';

const Home = () => {
  return (
    <div>
      {/* <BannerArea /> */}
      <GenreListing customGenreId={28} />
      <GenreListing customGenreId={12} />
      <GenreListing customGenreId={16} />
      <GenreListing customGenreId={27} />
    </div>
  );
};

export default Home;