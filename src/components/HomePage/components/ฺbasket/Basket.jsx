import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import Navlog from '../Navlog/Navlog';
import Footer from '/src/components/firstpage/components/footer/Footer';
import TotalPrice from './TotalPrice';
import BasketItem from './Basketltem';

const Basket = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const navigate = useNavigate(); 
  const { cartItems, removeFromCart, } = useCart();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDeleteItem = (deletedItem, deletedPrice) => {
    removeFromCart(deletedItem, deletedPrice);
  };  

  const renderEmptyBasketMessage = () => (
    <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
      <p className="font-prompt phone:text-sm sm:text-2xl md:text-3xl xl:text-3xl font-extrabold">
        ตระกร้าของคุณยังว่างเปล่า
      </p>
    </div>
  );

  return (
    <div>
      <Navlog />
      <div className='w-full bg-grey pb-[15%]'>
        <div className='flex items-center pl-10 xl:pl-[10%] pt-[5%]'>
          <p className="font-prompt phone:text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-bold">
            ตระกร้าสินค้า
          </p>
        </div>

      {isMobile ? (
      <div className='pb-[5%] flex flex-col items-start p-[5%]  pt-[5%] bg-white'>
      <div className='flex items-center w-full mb-4'>
      <label className='flex items-center'>
        <input type='checkbox' className='w-[5%] mr-2' />
        <p className='font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-2xl'>
          เลือกรายการสินค้าทั้งหมด({cartItems.length})
        </p>
      </label>
      <button 
                type='button' 
                onClick={() => cartItems.forEach(item => handleDeleteItem(item))}
                className='flex justify-between pl-[10%]'
              >
        ลบสินค้าที่เลือก
      </button>
    </div>

    {cartItems.length === 0 ? (
      <div className='w-full'>
        {renderEmptyBasketMessage()}
      </div>
    ) : (
      <div className='flex flex-col w-full'>
        {cartItems.map((item, index) => (
          <div key={index} className='mb-4'>
            <BasketItem 
              item={item} 
              onDelete={handleDeleteItem} 
              className='border border-gray-300 rounded-lg p-2 bg-white shadow-md' 
            />
          </div>
        ))}
      </div>
    )}

    <div className='w-full mt-4'>
      <TotalPrice />
    </div>
  </div>
          
        ) : (
          <div className='pb-[5%] flex flex-col items-start p-[3%]  pt-[5%] bg-white'>
            <div className='flex items-center w-full mb-4'>

            <label className='flex'>
              <input type='checkbox' />
              <p className='font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-2xl pl-[0.5rem]'>
                เลือกรายการสินค้าทั้งหมด({cartItems.length})
              </p>
            </label>
            <div className='flex items-center xl:pl-[13%] md:pl-[20%]'>
              <button 
                type='button' 
                onClick={() => cartItems.forEach(item => handleDeleteItem(item))}
                className='flex justify-between pr-4'
              >
                <p className='font-prompt md:text-xl xl:text-2xl phone:pl-0.5'>
                  ลบสินค้าที่เลือก
                </p>
              </button>
            </div>
            </div>
            <div className='flex'>
           {cartItems.length === 0 ? (
          <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
            {renderEmptyBasketMessage()}
          </div>
          
        ) : (
          <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
            {cartItems.map((item, index) => (
              <BasketItem 
                key={index} 
                index={index} 
                item={item} 
                onDelete={handleDeleteItem} 
              />
            ))}
          </div>
        )}
         <TotalPrice />
        </div>
          </div>
        )}
        
       

       
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
