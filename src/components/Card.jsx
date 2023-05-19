import React from 'react'


const Card = ({item}) => {

  return (
    <div className='w-[386px] h-[486px] '>
      <img className='object-fit' src={item?.imagelist[0]?.url} alt={item?.name} />
      <div className='relative text-white font-avenir bottom-[95%] left-5 text-lg' >
        <h3>EUROPEAN</h3>
      </div>
      <div className='relative bottom-[25%] w-[340px] mx-auto text-sm' >
      {/* api de bulunan metinler alakasız olduğu için buraya bastırmadım, {item?.body } yapınca resimlere ayakkabı vb text yazdırmayı istemedim */}
        <h3 className='text-center text-white font-normal mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </h3>
      </div>
    </div>
  )
}

export default Card
