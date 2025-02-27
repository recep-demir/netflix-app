import Image from 'next/image';
import React from 'react'
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({vote_average, poster_path,id}) => {
  return (
    <div>
    
    <Image
    width={160}
    height={240}
     src={IMG_API+poster_path} alt="" />
    
    <span>
        {vote_average.toFixed(1)}
    </span>
    </div>
  )
}

export default MovieCard