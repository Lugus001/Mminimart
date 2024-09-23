import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navlog from '../Navlog/Navlog';
import Footer from '/src/components/firstpage/components/footer/Footer';

const Basket = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const navigate = useNavigate(); 
  const [basketItems, setBasketItems] = useState([]); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoginOpen = () => {
    navigate('/HomePage'); 
  };

  const handleConfirmBasketOpen = () => {
    navigate('/ConfirmBasket')
  }

  const addProductToBasket = (productIndex, quantity) => {
    setBasketItems((prevItems) => {
      const existingItem = prevItems.find(item => item.productIndex === productIndex);
      if (existingItem) {
        return prevItems.map(item =>
          item.productIndex === productIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { productIndex, quantity }];
      }
    });
  };

  const products = [
    {
      productIndex: 0,
      src: '/path/to/p1.png',
      alt: 'Special product1',
      name: 'น้ำยาล้างจาน ซันไลเลม่อน แบบถุง 500 มล.',
      price: 99.0,
    },
  ];

  const renderEmptyBasketMessage = () => (
    <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
      <p className="font-prompt phone:text-sm sm:text-2xl md:text-3xl xl:text-3xl font-extrabold">
        ตระกร้าของคุณยังว่างเปล่า
      </p>
    </div>
  );

  return (
    <div>
  <Navlog addProductToBasket={addProductToBasket} />

      <div className='w-full bg-grey pb-[15%]'>
        <div className='flex items-center pl-10 xl:pl-[10%] pt-[5%]'>
          <p className="font-prompt phone:text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-bold">
            ตระกร้าสินค้า
          </p>
        </div>

        {isMobile ? (
          <div className='pb-[5%] flex items-center pl-8 xl:pl-[10%] pt-[5%]'>
            <label className='flex'>
              <input type='checkbox' className='w-[5%]' />
              <p className='font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-2xl pl-[0.5rem]'>
                เลือกรายการสินค้าทั้งหมด(0)
              </p>
            </label>
            <div className='flex items-center xl:pl-[30%] md:pl-[20%] phone:ml-[4%]'>
              <button type='button' className='flex justify-between pr-4'>
                {/* SVG Icon */}
                <p className='font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-2xl pl-[0.5rem]'>
                  ลบสินค้าที่เลือก(0)
                </p>
              </button>
            </div>
          </div>
        ) : (
          <div className='pb-[2%] flex items-center pl-[10%] pt-[2%]'>
            <label className='flex'>
              <input type='checkbox' />
              <p className='font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-2xl pl-[0.5rem]'>
                เลือกรายการสินค้าทั้งหมด({basketItems.length})
              </p>
            </label>
            <div className='flex items-center xl:pl-[13%] md:pl-[20%]'>
              <button type='button' className='flex justify-between pr-4'>
                {/* SVG Icon */}
                <p className='font-prompt md:text-xl xl:text-2xl phone:pl-0.5'>
                  ลบสินค้าที่เลือก(0)
                </p>
              </button>
            </div>
          </div>
        )}
      

        {basketItems.length === 0 ? (
          <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
            {renderEmptyBasketMessage()}
          </div>
        ) : (
         
          <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>

    {basketItems.map((item, index) => {
      <div key={item.productIndex}>
            {item.name} - Quantity: {item.quantity}
          </div>
    const product = products[item.productIndex];
    if (!product) return null;

  return (
    <div key={index} className='w-full bg-white border border-bgrey rounded-2xl p-6 mb-4'>
      <div className='flex items-center'>
        <input type='checkbox' className='mr-4' />
        <img src={product.src} alt={product.alt} className='w-16 h-16 object-cover mr-4' />
        <div>
          <p className='font-prompt text-xl font-bold'>{product.name}</p>
          <p className='font-prompt text-xl'>ราคา: ฿{product.price}</p>
          <p className='font-prompt text-xl'>จำนวน: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
})}
          </div>
        )}

        <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
          <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
            <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl font-bold pb-3">
              สรุปคำสั่งซื้อ
            </p>
            <div className='flex justify-between pb-3'>
              <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl">
                ราคา
              </p>
              <p className='font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl'>
              ฿{basketItems.reduce((total, item) => total + products[item.productIndex].price * item.quantity, 0)}
              </p>
            </div>
            <div className='border border-bgrey'></div>
            <div className='pt-5'>
              <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl font-bold pb-3">
                ยอดสุทธิ
              </p>
              <p className="font-prompt phone:text-sm sm:text-sm md:text-xl xl:text-xl">
                (ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)
              </p>
            </div>
          </div>
          <div className='p-5 items-center'></div>
          <div className='pb-3'>
            <Button
              onClick= {handleConfirmBasketOpen}
              sx={{
                width: '100%',
                borderRadius: '1rem',
                color: 'black',
                fontFamily: 'Prompt',
                backgroundColor: '#FFC51B',
              }}
            >
              ชำระเงิน
            </Button>
          </div>
          <div>
            <Button
              onClick={handleLoginOpen}
              color="primary"
              sx={{
                width: '100%',
                border: '1px solid black',
                borderRadius: '1rem',
                fontFamily: 'Prompt',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#e5e5e5',
                },
              }}
            >
              เลือกสินค้าต่อ
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Basket;