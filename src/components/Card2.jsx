import React from 'react'

const Card2 = ({title, txt, img}) => {
  return (
    <div className=' rounded-2xl shadow-2xl md:w-[20%] flex flex-col justify-center items-center py-8'>
        <p className='font-mono'>{title}</p>
         <p className='font-bold'>{txt}</p>
         <img src={img} alt="" />
 <p className='text-[#78350F] font-mono'>Buy Tickets</p>
    </div>
  )
}

export default Card2