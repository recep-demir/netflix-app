import React from 'react'

const HeroSection = ({title,id,overview}) => {
  return (
    <div className="relative h-[50vw]">
        <div className="absolute top-[30%] ml-4 md:ml-16">


        <p>
            {title}
        </p>
        <p>{overview}</p>
        </div>
    </div>
  )
}

export default HeroSection