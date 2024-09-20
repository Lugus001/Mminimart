import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import Navlog from './Navlog/Navlog';

const Basket = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navlog />
      <div className='w-full bg-grey'>
        <div className='flex items-center pl-10 xl:pl-[10%] pt-[5%]'>
          <p className="font-prompt phone:text-2xl sm:text-3xl  md:text-4xl xl:text-4xl font-bold">ตระกร้าสินค้า</p>
        </div>
      
        {isMobile && (
          <>
            <div className='pb-[5%] flex items-center phone:ml- pl-8 xl:pl-[10%] pt-[5%]'>
          <label className='flex'>
            <input type='checkbox' className=''></input>
            <p className='font-prompt phone:text-sm sm:text-xl  md:text-xl xl:text-2xl pl-[0.5rem]'>เลือกรายการสินค้าทั้งหมด(0)</p>
          </label>
          <div className='flex items-center xl:pl-[30%] md:pl-[20%] phone:ml-[4%]'>
            <button type='button' className='flex justify-between pr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <p className='font-prompt phone:text-sm sm:text-xl  md:text-xl xl:text-2xl pl-[0.5rem] phone:pl-0.5'>ลบสินค้าที่เลือก(0)</p>
            </button>
          </div>
        </div>
            <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
              <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
                <p className="font-prompt phone:text-sm sm:text-2xl  md:text-3xl xl:text-3xl font-extrabold">ตระกร้าของคุณยังว่างเปล่า</p>
              </div>
            </div>
            <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
              <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
                <p className="font-prompt phone:text-sm sm:text-xl  md:text-2xl xl:text-2xl font-bold pb-3">สรุปคำสั่งซื้อ</p>
                <div className='flex justify-between pb-3'>
                  <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl">ราคา</p>
                  <p className='font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl'>฿0</p>
                </div>
                <div className='border border-bgrey'></div>
                <div className='pt-5'>
                  <p className="font-prompt phone:text-sm sm:text-xl  md:text-2xl xl:text-2xl font-bold pb-3">ยอดสุทธิ</p>
                  <p className="font-prompt phone:text-sm sm:text-sm md:text-xl xl:text-xl">(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</p>
                </div>
              </div>
              <div className='p-5 items-center'></div>
              <div className='pb-3'>
                <Button 
                  onClick={() => console.log("Payment button clicked")} 
                  sx={{
                    width: '100%',
                    border: '1px none',
                    borderRadius: '1rem',
                    color: 'black',
                    fontFamily: 'Prompt',
                    backgroundColor: '#FFC51B',
                  }}>
                  ชำระเงิน
                </Button>
              </div>
              <div>
                <Button  
                  onClick={() => console.log("Continue shopping button clicked")} // Fix onClick handler
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
                  }}>
                  เลือกสินค้าต่อ
                </Button>
              </div>
            </div>
          </>
        )}

        {!isMobile && (
          <>
            <div className='pb-[2%] flex items-center pl-[10%] pt-[2%]'>
          <label className='flex'>
            <input type='checkbox' className=''></input>
            <p className='font-prompt phone:text-sm sm:text-xl  md:text-xl xl:text-2xl pl-[0.5rem]'>เลือกรายการสินค้าทั้งหมด(0)</p>
          </label>
          <div className='flex items-center xl:pl-[13%] md:pl-[20%]'>
            <button type='button' className='flex justify-between pr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <p className='font-prompt md:text-xl xl:text-2xl  phone:pl-0.5'>ลบสินค้าที่เลือก(0)</p>
            </button>
          </div>
        </div>
            <div className='pl-[10%] flex pr-[15%]'>
              <div className='w-full h-[50%] bg-white border border-bgrey rounded-2xl p-6'>
                <p className="font-prompt  md:text-3xl xl:text-3xl font-extrabold">ตระกร้าของคุณยังว่างเปล่า</p>
              </div>
              <div className='pl-[5%] w-[50%] '>
                <div className='w-full bg-white border border-bgrey rounded-2xl p-5'>
                  <p className="font-prompt  md:text-2xl xl:text-2xl font-bold pb-3">สรุปคำสั่งซื้อ</p>
                  <div className='flex justify-between pb-3'>
                    <p className="font-prompt  md:text-2xl xl:text-2xl">ราคา</p>
                    <p className='font-prompt md:text-2xl xl:text-2xl'>฿0</p>
                </div>
                <div className='border border-bgrey'></div>
                <div className='pt-5'>
                  <p className="font-prompt phone:text-sm sm:text-xl  md:text-2xl xl:text-2xl font-bold pb-3">ยอดสุทธิ</p>
                  <p className="font-prompt phone:text-sm sm:text-sm md:text-xl xl:text-xl">(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</p>
                </div>
                <div className='pb-4 pt-4'>
                <Button 
                  onClick={() => console.log("Payment button clicked")} // Fix onClick handler
                  sx={{
                    width: '100%',
                    border: '1px none',
                    borderRadius: '1rem',
                    color: 'black',
                    fontFamily: 'Prompt',
                    backgroundColor: '#FFC51B',
                  }}>
                  ชำระเงิน
                </Button>
              </div>
              <div>
                <Button  
                  onClick={() => console.log("Continue shopping button clicked")} // Fix onClick handler
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
                  }}>
                  เลือกสินค้าต่อ
                </Button>
              </div>
              </div>
              <div className='p-5 items-center'></div>
              
            </div>
            </div>
            
          </>
        )}

      </div>
      {/* Footer */}
      <div className='bg-orange w-full mt-auto'>
        <div className='p-4 flex flex-wrap justify-center items-center space-x-5'>
          <div><p className='font-prompt text-sm'>นโยบายการใช้คุกกี้</p></div>
          <div><p className='font-prompt text-sm'>การตั้งค่าคุ้กกี้</p></div>
          <div><p className='font-prompt text-sm'>ข้อกำหนดและเงื่อนไข</p></div>
          <div><p className='font-prompt text-sm'>เข้าร่วม M-minimart เป็นผู้ขาย</p></div>
        </div>
        <div className='mt-8 border border-grey-200'></div>
        <div className='flex justify-center items-center mt-8'>
          <p className='font-prompt text-sm'>ลิขสิทธิ์ © 2024 M-minimart สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </div>
  );
}

export default Basket;
