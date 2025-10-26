import React, { useEffect, useState } from 'react'
import fetchData from '../../utils/Request';
import Axios from '../../utils/Axios';
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const request = Axios.get(fetchData.getUpcommingMovies)
        
        .then(res => {
            const index = Math.floor(Math.random() * res.data.results.length)
            setMovie(res.data.results[index]);
        }).catch(err => console.log(err))
        // console.log(request);
    }, []);

function count(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
} 


    return (
         <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {count(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
    );
}

export default Banner