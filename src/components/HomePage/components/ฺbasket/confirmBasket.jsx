import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navlog from '../Navlog/Navlog';
import Button from '@mui/material/Button';
import Footer from '/src/components/firstpage/components/footer/Footer';

const confirmBasket = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const navigate = useNavigate(); 

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 800);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
  return (
    <div>
        <Navlog/>
        <div className='w-full bg-grey pb-[20%]'>
            <div className='flex items-center pl-[10%] xl:pl-[10%] pt-[5%]'>
                <p className="font-prompt phone:text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-bold">
                ยืนยันการสั่งซื้อ
                 </p>  
            </div>
        
        {isMobile ? (
            <div className='pl-[8%] pr-[8%] bg-grey w-full'>
                 <p className="p-5 font-prompt phone:text-md sm:text-2xl md:text-3xl xl:text-3xl font-bold">
                    รายการสินค้า
                </p> 
                <div className='w-full  bg-white border border-bgrey rounded-2xl p-6'>
                </div>
                <p className="p-5 font-prompt phone:text-md sm:text-2xl md:text-3xl xl:text-3xl font-bold">
                    ที่อยู่จัดส่ง
                </p> 
                <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
                </div>
                
                <div className='flex'>
                    <div className='w-full bg-white border border-bgrey rounded-2xl p-6 mt-5'>
                    <p className="p-5 font-prompt phone:text-md sm:text-2xl md:text-3xl xl:text-3xl font-bold">
                        ยอดสุทธิ
                    </p> 
                    <p className="pl-5 font-prompt phone:text-xs sm:text-xs md:text-2xl xl:text-2xl ">
                        (ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)
                    </p>
                    <div className='flex items-center p-5'>
                        <Button
                            onClick
                            sx={{
                            width: '50%',
                            borderRadius: '1rem',
                            color: 'black',
                            fontFamily: 'Prompt',
                            backgroundColor: '#FFC51B',
                                }}> ชำระเงิน
                        </Button>
                    </div>
                   
                </div>

                </div>
               
            </div>
          
            
            
        
        ): (
            <div className='pl-[5rem] pr-4 bg-grey w-full'>
                 <p className="p-5 font-prompt phone:text-md sm:text-2xl md:text-3xl xl:text-3xl font-bold">
                    รายการสินค้า
                </p> 
                <div className='w-full  bg-white border border-bgrey rounded-2xl p-6'>
                </div>
                <p className="p-5 font-prompt phone:text-md sm:text-2xl md:text-3xl xl:text-3xl font-bold">
                    ที่อยู่จัดส่ง
                </p> 
                <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
                </div>
                
                <div className='flex'>
                    <div className='w-full bg-white border border-bgrey rounded-2xl p-6 mt-5'>
                    <p className="p-5 font-prompt phone:text-md sm:text-2xl md:text-3xl xl:text-3xl font-bold">
                        ยอดสุทธิ
                    </p> 
                    <p className="pl-5 font-prompt phone:text-xs sm:text-xs md:text-2xl xl:text-2xl ">
                        (ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)
                    </p>
                    <div className='flex items-center p-5'>
                        <Button
                            onClick
                            sx={{
                            width: '50%',
                            borderRadius: '1rem',
                            color: 'black',
                            fontFamily: 'Prompt',
                            backgroundColor: '#FFC51B',
                                }}> ชำระเงิน
                        </Button>
                    </div>
                   
                </div>

                </div>
               
            </div>
        )}
        
        </div>
        <Footer/>
    </div>
  )
}

export default confirmBasket