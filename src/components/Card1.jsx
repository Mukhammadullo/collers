import React from 'react'

const Card1 = ({img, title, txt}) => {
  return (
    <div className='shadow-2xl md:w-[20%] py-5 rounded-xl '>
        <img src={img} alt="" />
        <p className='font-bold text-[20px] p-[3%]'>{title}</p>
        <p className='text-[#0F172A] m-[4%]'>{txt}</p>
        <p className='text-[#78350F] font-mono pl-[4%]'>Read article</p>
    </div>
  )
}

export default Card1