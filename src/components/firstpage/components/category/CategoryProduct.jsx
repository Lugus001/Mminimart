import React, { useState } from 'react';

const CategoryProduct = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible); // Toggle the visibility
  };

  return (
    <div className='w-full h-[3rem] bg-grey border border-bgrey'>
      <div className='mt-3 inline-flex pl-10'>
        <p className="font-prompt">หมวดหมู่สินค้า</p>
        <div className='ml-[2rem]'>
          <button type='button' onClick={handleButtonClick}>
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </div>
      {isContentVisible && (
         <div
        
       >
          
          <p>หมวดหมู่สินค้า</p>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
