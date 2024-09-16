import React, { useState } from 'react'
import cloth from '/src/assets/cloth.png'
import cosmetic from '/src/assets/cosmetic.png'
import food from '/src/assets/food.png'
import tooth from '/src/assets/tooth.png'


const ShowBar = () => {

  const [index, setIndex] = useState(0);


    const images = [
      { src: food, alt: 'food' },
      { src: cosmetic, alt: 'cosmetic' },
      { src: tooth, alt: 'tooth' },
      { src: cloth, alt: 'cloth' }
    ];
  
    const length = images.length;

    const handlePrevious =() => {
      setIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    const handleNext =() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
  };

 
  

  return (
    

      <div className="w-full h-full bg-grey  border-b-bgrey">
        <div className="flex justify-end items-center h-full pr-1 pt-5 space-x-2">

       {/* Previous Button */}
          <button onClick={handlePrevious}>
            <svg className="h-8 w-8 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
            <circle cx="12" cy="12" r="10" />  <polyline points="12 8 8 12 12 16" />  
            <line x1="16" y1="12" x2="8" y2="12" /></svg>
          </button>

      {/* Next Button */}
        <button onClick={handleNext}>
          <svg className="h-8 w-8 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
        </button>
      </div >


            {/* Responsive Image Grid */}
      <div className="flex overflow-auto w-full pt-2 pb-4">
          <div>
            <img  src={food} alt='food' className='w-full  border border-grey-100 rounded-xl' />
           </div>
          <div className='ml-6'>
            <img src={cosmetic} alt='cosmetic' className='w-full border border-grey-100 rounded-xl' />
          </div>
          <div className='ml-6'>
            <img src={tooth} alt='tooth' className='w-full border border-grey-100 rounded-xl' />
          </div>
          <div className='ml-6'>
            <img src={cloth} alt='cloth' className='w-full border border-grey-100 rounded-xl' />
          </div>

      </div>

      

  </div>   
    
  )

}

export default ShowBar