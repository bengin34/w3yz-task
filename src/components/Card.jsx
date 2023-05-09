import React from 'react'
import main from "../assets/main.jpg"

const Card = () => {
  return (
    <div className='w-[386px] h-[486px] '>
      <img className='object-fit' src={main} alt="" />
      <div className='relative text-white bottom-[35%] left-5 text-lg' >
        <h3>EUROPAN</h3>
      </div>
      <div className='relative top-[35%] w-[340px] mx-auto text-sm' >
        <h3 className='text-center mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h3>
      </div>
    </div>
  )
}

export default Card
